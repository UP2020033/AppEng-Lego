import * as pageGen from './pageGeneration.mjs';

function createTile(id, description, image, price) {
  const selectContainer = document.querySelector('.mainShopBox');
  const newItem = document.createElement('div');
  selectContainer.appendChild(newItem);
  newItem.className = 'item';
  newItem.id = `item: ${id}`;

  const itemImage = document.createElement('img');
  newItem.appendChild(itemImage);
  itemImage.src = `${image}`;
  itemImage.className = 'itemImage';

  const itemDescription = document.createElement('div');
  newItem.appendChild(itemDescription);
  itemDescription.className = 'itemDescription';

  const itemDescriptionText = document.createElement('p');
  newItem.appendChild(itemDescriptionText);
  itemDescriptionText.textContent = description;

  const itemPrice = document.createElement('p');
  newItem.appendChild(itemPrice);
  itemPrice.textContent = price;

  const addToBasket = document.createElement('div');
  newItem.appendChild(addToBasket);
}
