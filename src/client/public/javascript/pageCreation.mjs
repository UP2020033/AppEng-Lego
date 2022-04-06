// functions to create different elements - saves me repeating some code..

export function createSearchField(text, id, name) {
  const searchField = document.createElement('input');
  searchField.placeholder = text;
  searchField.id = id;
  searchField.name = name;
  return searchField;
}

export function addElement(elementType, classValue, idValue, txtContent, imgSource, inputType, value, appendTo) {
  const newElement = document.createElement(elementType);
  if (classValue !== null) newElement.className = classValue;
  if (idValue !== null) newElement.id = idValue;
  if (txtContent !== null) newElement.textContent = `${txtContent}`;
  if (elementType === 'a') newElement.href = imgSource;
  if (inputType !== null) newElement.inputType = inputType;
  if (value !== null) newElement.defaultValue = value;
  if (elementType === 'img') {
    newElement.src = imgSource;
  }
  appendTo.append(newElement);
  return newElement;
}

// Adding event listeners for the navigation bar.

export function addNavBarEventListeners() {
  const navElems = document.querySelectorAll('.navLink');
  console.log(navElems);
  for (const link of navElems) {
    if (link.id === 'homeLink') {
      link.addEventListener('click', () => {
        document.location.href = 'http://localhost:8080';
      });
    } else if (link.id === 'shopLink') {
      link.addEventListener('click', () => {
        document.location.href = 'http://localhost:8080/store';
      });
    } else {
      link.addEventListener('click', () => {
        document.location.href = 'http://localhost:8080/basket';
      });
    }
  }
}

// Appending the necessary elements to their parents

export function addTopNavBar() {
  const mainSection = document.querySelector('.mainSection');
  const topBarDiv = addElement('div', 'topBarDiv', null, null, null, null, null, mainSection);
  addElement('button', 'button', 'login', 'Login', null, null, null, topBarDiv);
  addElement('button', 'button', 'logout', 'Logout', null, null, null, topBarDiv);
}

export function addMainNavBar() {
  const mainSection = document.querySelector('.mainSection');
  const mainBarDiv = addElement('div', 'mainBarDiv', null, null, null, null, null, mainSection);
  const logoDiv = addElement('div', 'logoDiv', null, null, null, null, null, mainBarDiv);
  addElement('p', 'logoLink', 'logoLink', 'BlockZilla', null, null, null, logoDiv);
  const homeDiv = addElement('div', 'homeDiv', null, null, null, null, null, mainBarDiv);
  addElement('div', 'navLink', 'homeLink', 'Home', null, null, null, homeDiv);
  const shopDiv = addElement('div', 'shopDiv', null, null, null, null, null, mainBarDiv);
  addElement('div', 'navLink', 'shopLink', 'Shop', null, null, null, shopDiv);
  const searchDiv = addElement('div', 'searchDiv', null, null, null, null, null, mainBarDiv);
  searchDiv.append(createSearchField('Search for an item...', 'search', 'search'));
  const basketDiv = addElement('div', 'basketDiv', null, null, null, null, null, mainBarDiv);
  addElement('img', 'basket', null, null, '../public/images/shoppingcart.png', null, null, basketDiv);
  document.querySelector('.basketDiv').appendChild(document.createTextNode('0'));
}

export function addBottomNavBar() {
  const mainSection = document.querySelector('.mainSection');
  addElement('div', 'bottomBarDiv', null, null, null, null, null, mainSection);
}

export function createPage() {
  addTopNavBar();
  addMainNavBar();
  addBottomNavBar();
  addNavBarEventListeners();
}
