import * as pageCreate from './pageCreation.mjs';

// window.addEventListener('load', () => {
// fetch url pass id into fetch}
//
// )

pageCreate.buildItemPage();

async function buildItem() {
  let itemId = window.location.search;
  console.log(itemId);
  itemId = itemId.slice(1);
  itemId = itemId.split(':');
  itemId = itemId[1];
  console.log(itemId);

  const response = await fetch(`/getItemById/${itemId}`);
  const item = await response.json();
  console.log(item);

  const imageContainerDiv = document.querySelector('.imageContainerDiv');
  const itemImage = pageCreate.createImage('../public/images/legoBonzaiTree.jpg', 'itemDetailsImage');
  imageContainerDiv.append(itemImage);

  const itemDescriptionContainer = document.querySelector('.itemDescriptionContainer');
  const itemDescription = pageCreate.createParagraph('Description', 'itemDetailDescText', 'itemDetailDescText');
  itemDescriptionContainer.append(itemDescription);

  const itemPriceContainer = document.querySelector('.itemPriceContainer');
  const itemPriceText = pageCreate.createParagraph('Price', 'itemPriceText');
  itemPriceContainer.append(itemPriceText);

  const itemDetailQuantity = document.querySelector('.itemQuantityContainer');
  const minusButton = pageCreate.createButton('minusButton', 'button', '-');
  const quantityField = pageCreate.createQuantityField('number', 'quantityField', '1');
  const additionButton = pageCreate.createButton('addButton', 'button', '+');

  itemDetailQuantity.append(minusButton);
  itemDetailQuantity.append(quantityField);
  itemDetailQuantity.append(additionButton);

  const stockStatus = document.querySelector('.stockStatus');
  const stockStatusText = pageCreate.createParagraph('stock', 'stockText', 'stockText');
  stockStatus.append(stockStatusText);

  const itemAddToBasket = document.querySelector('.itemAddToBasket');
  const addToBasket = pageCreate.createButton('addToBag', 'addItemToBag', 'Add to Basket');
  itemAddToBasket.append(addToBasket);

  addQuantityButtonListeners();
}

async function getItemById(id) {
  const response = await fetch(`/getItemById/${id}`);
  const data = await response.json();
  console.log(data);
  return data;
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

buildItem();
