import * as pageBuilder from './pageBuilder.mjs';
import * as localStorage from './localStorage.mjs';

export function getProductId() {
  let itemId = window.location.search;
  console.log(itemId);
  itemId = itemId.slice(1);
  itemId = itemId.split(':');
  itemId = itemId[1];
  return itemId;
}

function addToBasketListener() {
  const addToBasket = document.querySelector('#addItemToBasketButton');
  addToBasket.addEventListener('click', localStorage.addToBasket);
}

function addBasketButtons() {
  const itemDetailQuantity = document.querySelector('.itemQuantityContainer');
  const minusButton = pageBuilder.createButton('minusButton', 'button', '-');
  const quantityField = pageBuilder.createQuantityField('number', 'quantityField', '1');
  const additionButton = pageBuilder.createButton('addButton', 'button', '+');

  itemDetailQuantity.append(minusButton);
  itemDetailQuantity.append(quantityField);
  itemDetailQuantity.append(additionButton);
}

function buildItem(description, image, price, stock) {
  const imageContainerDiv = document.querySelector('.imageContainerDiv');
  const itemImage = pageBuilder.createImage(`../public/images/${image}.jpg`, 'itemDetailsImage');
  imageContainerDiv.append(itemImage);

  const itemDescriptionContainer = document.querySelector('.itemDescriptionContainer');
  const itemDescription = pageBuilder.createParagraph(`${description}`, 'itemDetailDescText', 'itemDetailDescText');
  itemDescriptionContainer.append(itemDescription);

  const itemPriceContainer = document.querySelector('.itemPriceContainer');
  const itemPriceText = pageBuilder.createParagraph(`${price}`, 'itemPriceText');
  itemPriceContainer.append(itemPriceText);

  const itemDetailQuantity = document.querySelector('.itemQuantityContainer');

  const stockStatus = document.querySelector('.stockStatus');
  const stockStatusText = pageBuilder.createParagraph(`${stock}`, 'stockText', 'stockText');
  stockStatus.append(stockStatusText);

  const itemAddToBasket = document.querySelector('.itemAddToBasket');
  const addToBasket = pageBuilder.createButton('addItemToBasketButton', 'addItemToBasketButton', 'Add to Basket');
  itemAddToBasket.append(addToBasket);

  pageBuilder.addBasketButtons(itemDetailQuantity);
  pageBuilder.addQuantityButtonListeners();
  addToBasketListener();
}

async function addItem() {
  const itemId = getProductId();

  const response = await fetch(`/getItemById/${itemId}`);
  const item = await response.json();
  console.log(item);

  for (const param of item) {
    buildItem(param.product_description, param.product_image_link, param.product_price, param.stock_count);
  }
}

window.addEventListener('load', pageBuilder.buildItemPage);
window.addEventListener('load', addItem);
