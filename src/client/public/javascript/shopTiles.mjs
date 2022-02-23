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
}

function appendElems(elemToAppend, appendToElem) {
  const elToAppend = document.querySelector(elemToAppend);
  const elAppendTo = document.querySelector(appendToElem);
  elAppendTo.appendChild(elToAppend);
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

  createImage(image, 'itemImage');
  appendElems(newItem, 'itemImage');

  /*
  const itemImage = document.createElement('img');
  newItem.appendChild(itemImage);
  itemImage.src = `${image}`;
  itemImage.className = 'itemImage';
  */

  pageCreate.createDiv('itemDescription');
  createParagraph(description, 'descriptionText');
  appendElems(newItem, 'itemDescription');
  appendElems('itemDescription', 'descriptionText');

  const itemDescriptionText = document.createElement('p');
  newItem.appendChild(itemDescriptionText);
  itemDescriptionText.textContent = description;

  const itemPrice = document.createElement('div');
  newItem.appendChild(itemPrice);
  itemPrice.className = 'itemPrice';

  const itemPriceText = document.createElement('p');
  itemPrice.appendChild(itemPriceText);
  itemPriceText.textContent = price;

  const addToBasket = document.createElement('div');
  newItem.appendChild(addToBasket);
}

let items = [
  {
    'Item Image': '/public/images/DummyImage.jpg',
    'Item Description': 'Heman Brick 1',
    'Item Price': '£10',
  },
  {
    'Item Image': 'Image',
    'Item Description': 'Heman Brick 2',
    'Item Price': '£10',
  },
  {
    'Item Image': 'Image',
    'Item Description': 'Heman Brick 3',
    'Item Price': '£10',
  },
  {
    'Item Image': 'Image',
    'Item Description': 'Heman Brick 4',
    'Item Price': '£10',
  },
  {
    'Item Image': 'Image',
    'Item Description': 'Heman Brick 5',
    'Item Price': '£10',
  },
  {
    'Item Image': 'Image',
    'Item Description': 'Heman Brick 6',
    'Item Price': '£10',
  },
];
