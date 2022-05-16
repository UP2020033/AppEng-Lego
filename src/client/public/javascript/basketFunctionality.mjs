import * as checkout from './checkout.mjs';

// addToBasket adds the relevant items to localStorage

export function addToBasket(productId) {
  const quantityField = document.querySelector('.quantityField');
  const itemId = productId.split(':')[1];
  console.log(window.location.href);
  const data = JSON.parse(localStorage.getItem(itemId));

  let itemToAdd = {};
  if (window.location.pathname === '/store/') {
    itemToAdd = {
      product_id: itemId,
      quantity: 1,
    };
  } else {
    console.log(window.location.pathname);
    const quantityValue = parseInt(quantityField.value, 10);
    itemToAdd = {
      product_id: itemId,
      quantity: quantityValue,
    };
  }
  if (data !== null) {
    console.log(itemToAdd.quantity);
    itemToAdd.quantity += data.quantity;
    console.log(data.quantity);
    console.log(itemToAdd.quantity);
  }
  console.log(itemToAdd);
  localStorage.setItem(itemId, JSON.stringify(itemToAdd));
}

export function addToBasketListener(button) {
  const id = button.id;
  button.addEventListener('click', () => {
    addToBasket(id);
  });
}

export function clearBasket() {
  localStorage.clear();
}


export async function findBasketItems() {
  const basketItemsArr = [];
  for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i));
    let basketItem = localStorage.getItem(localStorage.key(i));

    basketItem = JSON.parse(basketItem);
    // (Flaschen, 2010) -- loop through local storage
    const response = await fetch(`/getItemById/${basketItem.product_id}`);
    const item = response.json();
    await item.then(obj => {
      for (const item of obj) {
        basketItemsArr.push(item);
      }
    });
}
  console.log(basketItemsArr);
  return basketItemsArr;
}

async function basketUpdate(id) {
  const basketQuantity = document.querySelector('.basketQuantityText');
  const basketPrice = document.querySelector('.basketTotalPrice');
  const totalQuantity = checkout.findBasketItemQuantity();
  const totalPrice = await checkout.findBasketTotalPrice();
  const finalPrice = totalPrice.toFixed(2);

  let itemUpdate = {};

  let basketItemCount = localStorage.getItem(id);
  basketItemCount = JSON.parse(basketItemCount);
  basketItemCount = basketItemCount.quantity;
  const newBasketCount = basketItemCount + 1;

  itemUpdate = {
    product_id: id.toString(),
    quantity: newBasketCount,
  };
  localStorage.setItem(id, JSON.stringify(itemUpdate));
  basketQuantity.textContent = `Total number of items:${totalQuantity + 1}`;
  basketPrice.textContent = `Subtotal: £${finalPrice}`;
}

function addBasketPageEventListeners(id) {
  const addButton = document.getElementById(`addButton:${id}`);
  const minusButton = document.getElementById(`minusButton:${id}`);
  const quantityField = document.getElementById(`quantityField:${id}`);

  addButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(quantityField.value) || 0;
    quantityField.value = currentValue + 1;
    basketUpdate(id);
  });
  minusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(quantityField.value) || 0;
    if (currentValue === 0 || currentValue === 1) {
      console.log('Value already 0, no subtracting!');
    } else quantityField.value = currentValue - 1;
  });
  // Interpreted from: (Finesse, 2018)
}

function addItemToBasketPageEventListeners() {
  const addButton = document.querySelector('#addButton');
  const minusButton = document.querySelector('#minusButton');
  const quantityField = document.querySelector('.quantityField');

  addButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(quantityField.value) || 0;
    quantityField.value = currentValue + 1;
  });

  minusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(quantityField.value) || 0;
    if (currentValue === 0 || currentValue === 1) {
      console.log('Value already 0, no subtracting!');
    } else quantityField.value = currentValue - 1;
  });
  // Interpreted from: (Finesse, 2018)
}

// Adding event listeners for the buttons to adjust the item quantity selector.

export function addQuantityButtonListeners(id) {
  if (window.location.href === 'http://localhost:8080/basket/') {
    addBasketPageEventListeners(id);
  // Interpreted from: (Finesse, 2018)
  } else {
    addItemToBasketPageEventListeners(id);
  }
}

export function removeItemFromBasket() {
  const removeButton = document.querySelector('.removeBasketItem');
  const itemId = removeButton.id.split(':')[1];
  console.log(itemId);
  const parentElem = document.getElementById(`item:${itemId}`);
  console.log(parentElem);

  parentElem.remove();

  localStorage.removeItem(itemId);
  console.log(removeButton);
}
