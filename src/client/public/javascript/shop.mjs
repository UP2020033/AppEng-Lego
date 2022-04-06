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

export async function fetchData() {
  const response = await fetch('/get-data');
  const data = await response.json();
  console.log(data);
  return data;
}

// Creating the 'tile' for each item and appending them.

function createTile(id, description, image, price) {
  const selectContainer = document.querySelector('.mainShopBox');
  const newItem = pageCreate.addElement('div', 'item', `item:${id}`, null, null, null, null, selectContainer);

  const imageElem = pageCreate.addElement('img', 'itemImage', `image:${id}`, null, image, null, null, newItem);
  const newItemDesc = pageCreate.addElement('div', 'itemDescription', null, null, null, null, null, newItem);
  pageCreate.addElement('p', 'descriptionText', null, description, null, null, null, newItemDesc);
  const itemPrice = pageCreate.addElement('div', 'itemPrice', null, null, null, null, null, newItem);
  pageCreate.addElement('p', 'itemPriceText', null, price, null, null, null, itemPrice);
  const addToBag = pageCreate.addElement('div', 'addItemToBag', null, null, null, null, null, newItem);
  pageCreate.addElement('button', 'addItemToBag', null, 'Add to Basket', null, null, null, addToBag);

  newItemDesc.addEventListener('click', () => {
    document.location.href = `http://localhost:8080/item/?product_id:${id}`;
  });

  imageElem.addEventListener('click', () => {
    // const itemId = image.id.split(":")[1]
    document.location.href = `http://localhost:8080/item/?product_id:${id}`;
    console.log(image.parentNode);
  });
}
// Looping over the the local array of objects and assigning necessary values.

function addTiles() {
  const data = fetchData();
  data.then(dataObj => {
    console.log(dataObj);
    for (const param of dataObj) {
      createTile(param.id, param.description, param.image, param.price);
      // addTileListeners(param.id);
    }
  });
}

addShopContent();
addTiles();
