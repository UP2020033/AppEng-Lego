import * as pageCreate from './pageCreation.mjs';

const mainSection = document.querySelector('.mainSection');

const containerFBox = document.createElement('div');
containerFBox.classList.add('containerFBox');
mainSection.appendChild(containerFBox);
console.log(containerFBox);

const categoryBox = document.createElement('div');
categoryBox.classList.add('categoryBox');
containerFBox.appendChild(categoryBox);

const newBox = document.createElement('div');
newBox.classList.add('mainShopBox');
containerFBox.appendChild(newBox);

const categoryReset = document.createElement('div');
categoryReset.id = 'categoryReset';
categoryBox.appendChild(categoryReset);

const categoryListDiv = document.createElement('div');
categoryListDiv.classList.add('category');

function createTile(id, description, image, price) {
  const selectContainer = document.querySelector('.mainShopBox');
  const newItem = document.createElement('div');
  selectContainer.appendChild(newItem);
  newItem.classList.add('item');
  newItem.id = `item: ${id}`;

  const newImage = pageCreate.createImage(image, 'itemImage');
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

function addTiles() {
  for (const param of items) {
    console.log(param);
    createTile('1', param.description, param.image, param.price);
  }
}

const items = [
  {
    image: '../public/images/DummyImage.jpg',
    description: 'Heman Brick 1',
    price: '10',
  },
  {
    image: '../public/images/DummyImage.jpg',
    description: 'Heman Brick 2',
    price: '10',
  },
  {
    image: '../public/images/DummyImage.jpg',
    description: 'Heman Brick 3',
    price: '10',
  },
  {
    image: '../public/images/DummyImage.jpg',
    description: 'Heman Brick 4',
    price: '10',
  },
  {
    image: '../public/images/DummyImage.jpg',
    description: 'Heman Brick 5',
    price: '10',
  },
  {
    image: '../public/images/DummyImage.jpg',
    description: 'Heman Brick 6',
    price: '10',
  },
];


addTiles();
