// functions to create different elements - saves me repeating some code..

export function createDiv(divClass) {
  const newBar = document.createElement('div');
  newBar.className = divClass;
  return newBar;
}

export function createHyperlink(text, link) {
  const navAnchor = document.createElement('a');
  navAnchor.setAttribute('href', link);
  navAnchor.innerText = text;
  navAnchor.className = 'hyperlink';
  return navAnchor;
}

export function createImage(imgSource, imgClass) {
  const newImage = document.createElement('img');
  newImage.src = imgSource;
  newImage.classList.add(imgClass);
  console.log(newImage);
  return newImage;
}

export function createButton(buttonId, buttonClass, text) {
  const newButton = document.createElement('button');
  newButton.classList.add(buttonClass);
  newButton.id = buttonId;
  newButton.textContent = text;
  return newButton;
}

export function createParagraph(content, pClass, pId) {
  const newPara = document.createElement('p');
  newPara.textContent = content;
  newPara.classList.add(pClass);
  newPara.id = pId;
  return newPara;
}

export function createSearchField(text, id, name) {
  const searchField = document.createElement('input');
  searchField.placeholder = text;
  searchField.id = id;
  searchField.name = name;
  return searchField;
}

export function createQuantityField(inputType, id, defaultValue) {
  const inputField = document.createElement('input');
  inputField.type = inputType;
  inputField.value = defaultValue;
  inputField.id = id;
  return inputField;
}


export function addElement(elementType, classValue, idValue, txtContent, imgSource, appendTo) {
  const newElement = document.createElement(elementType);
  if (classValue !== null) newElement.className = classValue;
  if (idValue !== null) newElement.id = idValue;
  if (txtContent !== null) newElement.textContent = `${txtContent}`;
  if (elementType === 'a') newElement.href = imgSource;
  if (elementType === 'img') {
    newElement.src = imgSource;
  }
  appendTo.append(newElement);
  console.log(newElement);
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
  const topBarDiv = addElement('div', 'topBarDiv', null, null, null, mainSection);
  addElement('button', 'button', 'login', 'Login', null, topBarDiv);
  addElement('button', 'button', 'logout', 'Logout', null, topBarDiv);
}

export function addMainNavBar() {
  const mainSection = document.querySelector('.mainSection');
  const mainBarDiv = addElement('div', 'mainBarDiv', null, null, null, mainSection);
  const logoDiv = addElement('div', 'logoDiv', null, null, null, mainBarDiv);
  addElement('p', 'logoLink', 'logoLink', 'BlockZilla', null, logoDiv);
  const homeDiv = addElement('div', 'homeDiv', null, null, null, mainBarDiv);
  addElement('div', 'navLink', 'homeLink', 'Home', null, homeDiv);
  const shopDiv = addElement('div', 'shopDiv', null, null, null, mainBarDiv);
  addElement('div', 'navLink', 'shopLink', 'Shop', null, shopDiv);
  const searchDiv = addElement('div', 'searchDiv', null, null, null, mainBarDiv);
  searchDiv.append(createSearchField('Search for an item...', 'search', 'search'));
  const basketDiv = addElement('div', 'basketDiv', null, null, null, mainBarDiv);
  addElement('img', 'basket', null, null, '../public/images/shoppingcart.png', basketDiv);
  document.querySelector('.basketDiv').appendChild(document.createTextNode('0'));
}

export function addBottomNavBar() {
  document.querySelector('.mainSection').appendChild(createDiv('bottomBarDiv'));
}

export function createPage() {
  addTopNavBar();
  addMainNavBar();
  addBottomNavBar();
  addNavBarEventListeners();
}
