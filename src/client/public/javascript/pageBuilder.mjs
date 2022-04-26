// functions to create different elements - saves me repeating some code..

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

export function createImage(imgSource, imgClass, imgId) {
  const newImage = document.createElement('img');
  newImage.src = imgSource;
  newImage.className = imgClass;
  newImage.id = imgId;
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

// Adding basket button for numerous pages.

export function basketQuantityFieldButtons(parent) {
  const minusButton = createButton('minusButton', 'button', '-');
  const quantityField = createQuantityField('number', 'quantityField', '1');
  const additionButton = createButton('addButton', 'button', '+');

  parent.append(minusButton);
  parent.append(quantityField);
  parent.append(additionButton);
}

// Adding basket


// Adding event listeners for the buttons to adjust the item quantity selector.

export function addQuantityButtonListeners() {
  const addButton = document.querySelector('#addButton');
  const minusButton = document.querySelector('#minusButton');
  const quantityField = document.querySelector('#quantityField');

  addButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(quantityField.value) || 0;
    quantityField.value = currentValue + 1;
  });

  minusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(quantityField.value) || 0;
    if (currentValue === 0 || currentValue === 1) {
      console.log('Value already 0, no subtracting!');
    } else quantityField.value = currentValue - 1;
  });
  // Interpreted from: https://stackoverflow.com/questions/52125163/how-to-create-a-minus-and-plus-button-to-update-a-field
}

// Appending the necessary elements to their parents

export function addTopNavBar() {
  document.querySelector('.mainSection').appendChild(createDiv('topBarDiv'));
  document.querySelector('.topBarDiv').appendChild(createButton('login', 'button', 'Login'));
  document.querySelector('.topBarDiv').appendChild(createButton('logout', 'button', 'Logout'));
}

export function addMainNavBar() {
  document.querySelector('.mainSection').appendChild(createDiv('mainBarDiv'));
  document.querySelector('.mainBarDiv').appendChild(createDiv('logoDiv'));
  document.querySelector('.logoDiv').appendChild(createParagraph('BlockZilla', 'logoLink', 'logoLink'));
  document.querySelector('.mainBarDiv').appendChild(createDiv('homeDiv'));
  document.querySelector('.homeDiv').appendChild(createParagraph('Home', 'navLink', 'homeLink'));
  document.querySelector('.mainBarDiv').appendChild(createDiv('shopDiv'));
  document.querySelector('.shopDiv').appendChild(createParagraph('Shop', 'navLink', 'shopLink'));
  document.querySelector('.mainBarDiv').appendChild(createDiv('searchDiv'));
  document.querySelector('.searchDiv').appendChild(createSearchField('Search for an item...', 'search', 'search'));
  document.querySelector('.mainBarDiv').appendChild(createDiv('basketDiv'));
  document.querySelector('.basketDiv').appendChild(createImage('../public/images/shoppingcart.png', 'navLink', 'basket'));
  document.querySelector('.basketDiv').appendChild(document.createTextNode('0'));
  const div = document.querySelector('.basketDiv');
  console.log(div.childNodes);
}

export function addBottomNavBar() {
  document.querySelector('.mainSection').appendChild(createDiv('bottomBarDiv'));
}

export function buildPageStructure() {
  addTopNavBar();
  addMainNavBar();
  addBottomNavBar();
  addNavBarEventListeners();
}

export function buildItemPage() {
  const mainSection = document.querySelector('.mainSection');
  const containerDiv = createDiv('itemDetailContainerDiv');
  const imageContainerDiv = createDiv('imageContainerDiv');
  const itemDetailContent = createDiv('itemDetailContentContainer');

  mainSection.append(containerDiv);
  containerDiv.append(imageContainerDiv);
  containerDiv.append(itemDetailContent);

  itemDetailContent.append(createDiv('itemDescriptionContainer'));
  itemDetailContent.append(createDiv('itemPriceContainer'));
  itemDetailContent.append(createDiv('itemQuantityContainer'));
  itemDetailContent.append(createDiv('stockStatus'));
  itemDetailContent.append(createDiv('itemAddToBasket'));
}

export function buildBasketPage() {
  const mainSection = document.querySelector('.mainSection');
  const basketContainer = createDiv('basketMainContainer');
  const basketItemContainer = createDiv('basketItemContainer');
  const basketCheckout = createDiv('basketCheckoutContainer');

  mainSection.append(basketContainer);
  basketContainer.append(basketItemContainer);
  basketContainer.append(basketCheckout);

  const basketTitle = createDiv('basketTitle');
  basketItemContainer.append(basketTitle);
  basketTitle.append(createParagraph('Your basket', 'basketTitleText', null));
}
