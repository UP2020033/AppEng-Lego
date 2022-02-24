import * as pageCreate from './pageCreation.mjs';

function createImage(imgSource, imgClass) {
  const newImage = document.createElement('img');
  newImage.src = imgSource;
  newImage.classList.add(imgClass);
  console.log(newImage);
  return newImage;
}

function createParagraph(content, pClass) {
  const newPara = document.createElement('p');
  newPara.textContent = content;
  newPara.classList.add(pClass);
  return newPara;
}

export function createDiv(divClass) {
  const newBar = document.createElement('div');
  newBar.className = divClass;
  return newBar;
}


function createTile(id, description, image, price) {
  const selectContainer = document.querySelector('.mainShopBox');
  const newItem = document.createElement('div');
  selectContainer.appendChild(newItem);
  newItem.classList.add('item');
  newItem.id = `item: ${id}`;

  const newImage = createImage(image, 'itemImage');
  newItem.appendChild(newImage);

  const newItemDesc = createDiv('itemDescription');
  const newItemDescText = createParagraph(description, 'descriptionText');
  newItem.appendChild(newItemDesc);
  newItemDesc.appendChild(newItemDescText);

  const itemPrice = pageCreate.createDiv('itemPrice');
  const itemPriceText = createParagraph(price, 'itemPriceText');
  newItem.appendChild(itemPrice);
  itemPrice.appendChild(itemPriceText);

  const addToBag = pageCreate.createDiv('addItemToBag');
  const addToBagText = createParagraph('Add to Basket', 'addItemToBag');
  newItem.appendChild(addToBag);
  addToBag.appendChild(addToBagText);
}

createTile('1', 'Test', '../public/images/DummyImage.jpg', '£1');

let items = [
  {
    Image: 'DummyImage.jpg',
    Description: 'Heman Brick 1',
    Price: '10',
  },
  {
    Image: 'DummyImage.jpg',
    Description: 'Heman Brick 1',
    Price: '10',
  },
  {
    Image: 'DummyImage.jpg',
    Description: 'Heman Brick 1',
    Price: '10',
  },
  {
    Image: 'DummyImage.jpg',
    Description: 'Heman Brick 1',
    Price: '10',
  },
  {
    Image: 'DummyImage.jpg',
    Description: 'Heman Brick 1',
    Price: '10',
  },
  {
    Image: 'DummyImage.jpg',
    Description: 'Heman Brick 1',
    Price: '10',
  },
];
