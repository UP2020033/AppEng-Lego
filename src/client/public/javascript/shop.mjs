import * as pageCreate from './pageCreation.mjs';

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

// Adding event listeners to direct user to the item page for the clicked image.

function addTileListeners() {
  const images = document.querySelectorAll('.itemImage');
  console.log(images);
  for (const image of images) {
    image.addEventListener('click', () => {
      document.location.href = 'http://localhost:8080/item';
      console.log(image.parentNode);
    });
  }
}

async function fetchData() {
  const response = await fetch('/get-data');
  const data = await response.json();
  console.log(data);
  return data;
}

// Creating the 'tile' for each item and appending them.

function createTile(id, description, image, price) {
  const selectContainer = document.querySelector('.mainShopBox');
  const newItem = document.createElement('div');
  selectContainer.appendChild(newItem);
  newItem.classList.add('item');
  newItem.id = `item:${id}`;

  const newImage = pageCreate.createImage(image, 'itemImage');
  newImage.id = `image:${id}`;
  newItem.appendChild(newImage);

  const newItemDesc = pageCreate.createDiv('itemDescription');
  const newItemDescText = pageCreate.createParagraph(description, 'descriptionText');
  newItem.appendChild(newItemDesc);
  newItemDesc.appendChild(newItemDescText);

  const itemPrice = pageCreate.createDiv('itemPrice');
  const itemPriceText = pageCreate.createParagraph(price, 'itemPriceText');
  newItem.appendChild(itemPrice);
  itemPrice.appendChild(itemPriceText);

  const addToBag = pageCreate.createDiv('addItemToBag');
  const addToBagText = pageCreate.createParagraph('Add to Basket', 'addItemToBag');
  newItem.appendChild(addToBag);
  addToBag.appendChild(addToBagText);
}

// Looping over the the local array of objects and assigning necessary values.

function addTiles() {
  const data = fetchData();
  data.then(dataObj => {
    console.log(dataObj);
    for (const param of dataObj) {
      createTile(param.id, param.description, param.image, param.price);
      addTileListeners();
    }
  });
}

addShopContent();
addTiles();
