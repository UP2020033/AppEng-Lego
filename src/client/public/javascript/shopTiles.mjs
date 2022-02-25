import * as pageCreate from './pageCreation.mjs';

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

createTile('1', 'Test', '../public/images/DummyImage.jpg', '£1');

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
