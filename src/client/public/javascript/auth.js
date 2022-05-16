
// (Example of Authentication with Auth0, 2021/2021)

async function fetchAuthConfig() {
  const response = await fetch('/auth-config');
  if (response.ok) {
    return response.json();
  } else {
    throw response;
  }
}

// global variable that is our entry point to the auth library
let auth0 = null;

async function initializeAuth0Client() {
  const config = await fetchAuthConfig();
  // eslint-disable-next-line no-undef
  auth0 = await createAuth0Client({
    domain: config.domain,
    client_id: config.clientId,
    audience: config.audience,
  });
}

// update the state of all authentication-related elements

// ADD MORE HERE WITHIN THE IS AUTHENTICATED BIT
async function updateAuthUI() {
  const isAuthenticated = await auth0.isAuthenticated();

  document.getElementById('login').disabled = isAuthenticated;
  document.getElementById('logout').disabled = !isAuthenticated;

  // if (isAuthenticated) {
  //   const currentUser = auth0.getUser();
  //   currentUser.then(async (res) => {
  //     console.log(res.email);
  //     localStorage.setItem('userEmail', res.email);
  //     const email = {
  //       emailAddress: res.email,
  //     };
  //     try {
  //       await fetch('/addUser/', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(email),
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });
  // }
}

async function login() {
  await auth0.loginWithRedirect({
    redirect_uri: window.location.origin,
  });
}

function logout() {
  auth0.logout({
    returnTo: window.location.origin,
  });
}

// check for the code and state parameters from Auth0 login redirect
async function handleAuth0Redirect() {
  const isAuthenticated = await auth0.isAuthenticated();
  if (isAuthenticated) return;

  const query = window.location.search;
  if (query.includes('state=')) {
    try {
    // process the login state
      await auth0.handleRedirectCallback();
    } catch (e) {
      window.alert(e.message || 'authentication error');
      logout();
    }

    window.history.replaceState({}, document.title, '/');

    await updateAuthUI();
  }
}

// make sure all interactive elements in the page have code attached to them
function setupListeners() {
  document.getElementById('login').addEventListener('click', login);
  document.getElementById('logout').addEventListener('click', logout);
}

// this will run when the page loads
async function init() {
  await initializeAuth0Client();
  await setupListeners();
  await updateAuthUI();
  await handleAuth0Redirect();
}

window.addEventListener('load', init);
