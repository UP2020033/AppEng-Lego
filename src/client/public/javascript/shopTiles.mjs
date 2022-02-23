import * as pageCreate from './pageCreation.mjs';

function createImage(imgSource, imgClass) {
  const newImage = document.createElement('img');
  newImage.src = imgSource;
  newImage.classList.add(imgClass);
  return newImage;
}

function createParagraph(content, pClass) {
  const newPara = document.createElement('p');
  newPara.textContent = content;
  newPara.classList.add(pClass);
  return newPara;
}

function appendElems(elemToAppend, appendToElem) {
  const elToAppend = document.querySelector(elemToAppend);
  const elAppendTo = document.querySelector(appendToElem);
  elAppendTo.appendChild(elToAppend);
}

/*
function appendElems(elemToAppend, appendToElem) {
  const elAppendTo = document.querySelector(appendToElem);
  elAppendTo.appendChild(elemToAppend);
}
*/

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

  createImage(image, 'itemImage');
  appendElems(newItem, '.itemImage');

  /*
  const itemImage = document.createElement('img');
  newItem.appendChild(itemImage);
  itemImage.src = `${image}`;
  itemImage.className = 'itemImage';
  */

  pageCreate.createDiv('itemDescription');
  createParagraph(description, 'descriptionText');
  appendElems('.itemDescription', newItem);
  appendElems('.descriptionText', '.itemDescription');

  /*
  const itemDescriptionText = document.createElement('p');
  newItem.appendChild(itemDescriptionText);
  itemDescriptionText.textContent = description;
  */

  pageCreate.createDiv('itemPrice');
  createParagraph(price, 'itemPriceText');
  appendElems('.itemPrice', newItem);
  appendElems('.itemPriceText', '.itemPrice');

  /*
  const itemPrice = document.createElement('div');
  newItem.appendChild(itemPrice);
  itemPrice.className = 'itemPrice';


  const itemPriceText = document.createElement('p');
  itemPrice.appendChild(itemPriceText);
  itemPriceText.textContent = price;

  */

  pageCreate.createDiv('addItemToBag');
  createParagraph('addItemToBagText', 'Add to Basket');
  appendElems('.addItemToBag', newItem);
  appendElems('.addItemToBagText', '.additemToBagText');
}

createTile();

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
