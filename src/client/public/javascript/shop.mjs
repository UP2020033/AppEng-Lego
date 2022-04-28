import * as pageBulder from './pageBuilder.mjs';
import * as basketFunc from './basketFunctionality.mjs';

// Add container div for Shop page

export function addContainer() {
  const mainSection = document.querySelector('.mainSection');
  const containerFBox = document.createElement('div');
  containerFBox.classList.add('containerFBox');
  mainSection.appendChild(containerFBox);
}

// Adding the category filter div

export function addCategoryBox() {
  const categoryBox = document.createElement('div');
  const containerFBox = document.querySelector('.containerFBox');
  categoryBox.classList.add('categoryBox');
  containerFBox.appendChild(categoryBox);
}

// Adding the 'tile' to include information for a single item, i.e. image, description.

export function addShopItemBox() {
  const newBox = document.createElement('div');
  const containerFBox = document.querySelector('.containerFBox');
  newBox.classList.add('mainShopBox');
  containerFBox.appendChild(newBox);
}

// Adding the category filter list

export function addCategoryFilter() {
  const categoryReset = document.createElement('div');
  const categoryBox = document.querySelector('.categoryBox');
  categoryReset.id = 'categoryReset';
  categoryBox.appendChild(categoryReset);

  const categoryListDiv = document.createElement('div');
  categoryListDiv.classList.add('category');
}

export function addShopContent() {
  addContainer();
  addCategoryBox();
  addShopItemBox();
  addCategoryFilter();
}

export async function fetchData() {
  const response = await fetch('/get-data');
  const data = await response.json();
  console.log(data);
  return data;
}

// Creating the 'tile' for each item and appending them.

function buildTile(id, description, image, price) {
  const selectContainer = document.querySelector('.mainShopBox');
  const newItem = document.createElement('div');
  selectContainer.appendChild(newItem);
  newItem.classList.add('item');
  newItem.id = `item:${id}`;

  const newImage = pageBulder.createImage(`/public/images/${image}.jpg`, 'itemImage');
  newImage.id = `image:${id}`;
  newItem.appendChild(newImage);

  const newItemDesc = pageBulder.createDiv('itemDescription');
  const newItemDescText = pageBulder.createParagraph(description, 'descriptionText');
  newItem.appendChild(newItemDesc);
  newItemDesc.appendChild(newItemDescText);

  const itemPrice = pageBulder.createDiv('itemPrice');
  const itemPriceText = pageBulder.createParagraph(price, 'itemPriceText');
  newItem.appendChild(itemPrice);
  itemPrice.appendChild(itemPriceText);

  const addToBasket = pageBulder.createDiv('addItemToBasket');
  const addToBasketButton = pageBulder.createButton(`button:${id}`, 'addItemToBasketButton', 'Add to Basket');
  newItem.appendChild(addToBasket);
  addToBasket.appendChild(addToBasketButton);

  basketFunc.addToBasketListener();


  newItemDesc.addEventListener('click', () => {
    document.location.href = `http://localhost:8080/item/?product_id:${id}`;
  });

  newImage.addEventListener('click', () => {
    // const itemId = image.id.split(":")[1]
    document.location.href = `http://localhost:8080/item/?product_id:${id}`;
  });
}
// Looping over the the local array of objects and assigning necessary values.

async function getItems() {
  const response = await fetch('/getItems');
  const data = await response.json();
  console.log(data);
  return data;
}

function addTiles() {
  const data = getItems();
  console.log(data);
  data.then(dataObj => {
    console.log(dataObj);
    for (const param of dataObj) {
      buildTile(param.product_id, param.product_description, param.product_image_link, param.product_price);
      // addTileListeners(param.id);
    }
  });
}

function init() {
  addShopContent();
  addTiles();
}

window.addEventListener('load', init);
