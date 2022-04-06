import * as pageCreate from './pageCreation.mjs';

// window.addEventListener('load', () => {
// fetch url pass id into fetch}
//
// )

async function itemPageInitialLoad() {
  let itemId = window.location.search;
  console.log(itemId);
  itemId = itemId.slice(1);
  itemId = itemId.split(':');
  itemId = itemId[1];
  console.log(itemId);

  const response = await fetch(`/get-data/${itemId}`, (response) => {
    console.log(response);
  });

  const itemDetails = response.json();
  console.log(itemDetails);


  const mainSection = document.querySelector('.mainSection');
  const containerDiv = pageCreate.addElement('div', 'itemDetailContainerDiv', null, null, null, null, null, mainSection);
  const imageContainerDiv = pageCreate.addElement('div', 'imageContainerDiv', null, null, null, null, null, containerDiv);
  pageCreate.addElement('img', 'itemDetailsImage', null, null, '../public/images/legoBonzaiTree.jpg', null, null, imageContainerDiv);
  const itemDetailContent = pageCreate.addElement('div', 'itemDetailContentContainer', null, null, null, null, null, containerDiv);
  const itemDescriptionContainer = pageCreate.addElement('div', 'itemDescriptionContainer', null, null, null, null, null, itemDetailContent);
  pageCreate.addElement('p', 'itemDetailDescText', null, 'Description', null, null, null, itemDescriptionContainer);
  const itemPriceContainer = pageCreate.addElement('div', 'itemPriceContainer', null, null, null, null, null, itemDetailContent);
  const itemPriceText = pageCreate.addElement('p', 'itemPriceText', null, 'Price', null, null, null, itemPriceContainer);
  const itemDetailQuantity = pageCreate.addElement('div', 'itemQuantityContainer', null, null, null, null, null, itemDetailContent);
  const minusButton = pageCreate.addElement('button', 'button', 'minusButton', '-', null, null, null, itemDetailQuantity);
  const quantityField = pageCreate.addElement('input', null, 'quantityField', '1', null, 'number', '1', itemDetailQuantity);
  const additionButton = pageCreate.addElement('button', 'button', 'addButton', '+', null, null, null, itemDetailQuantity);
  const stockStatus = pageCreate.addElement('div', 'stockStatus', null, null, null, null, null, itemDetailContent);
  const stockStatusText = pageCreate.addElement('p', null, 'stockText', 'stock', null, null, null, stockStatus);
  const itemAddToBasket = pageCreate.addElement('div', 'itemAddToBasket', null, null, null, null, null, itemDetailContent);
  const addToBasket = pageCreate.addElement('button', 'addItemToBag', 'addToBag', 'Add to Basket', null, null, null, itemAddToBasket);

  addQuantityButtonListeners();
}

function addQuantityButtonListeners() {
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

itemPageInitialLoad();
