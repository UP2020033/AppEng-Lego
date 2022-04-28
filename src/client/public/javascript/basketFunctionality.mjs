export function addToBasket(productId) {
  const quantityField = document.querySelector('#quantityField');
  const itemId = productId.split(':')[1];
  const quantityValue = quantityField.value;

  const itemToAdd = {
    product_id: itemId,
    quantity: quantityValue,
  };
  console.log(window.location);
  localStorage.setItem(itemId, JSON.stringify(itemToAdd));
  console.log(quantityValue);
}

export function addToBasketListener() {
  const addToBasketButton = document.querySelector('.addItemToBasketButton');
  const id = addToBasketButton.id;
  addToBasketButton.addEventListener('click', () => {
    addToBasket(id);
  });
}

export function clearBasket() {
  localStorage.clear();
}


export async function findBasketItems() {
  const basketItemsArr = [];
  for (let i = 0; i < localStorage.length; i++) {
    let basketItem = localStorage.getItem(localStorage.key(i));
    basketItem = JSON.parse(basketItem);
    // https://stackoverflow.com/questions/3138564/looping-through-localstorage-in-html5-and-javascript -- loop through local storage
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

// Adding event listeners for the buttons to adjust the item quantity selector.

export function addQuantityButtonListeners() {
  const addButton = document.querySelector('#addButton');
  const minusButton = document.querySelector('#minusButton');
  const quantityField = document.querySelector('#quantityField');

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
  // Interpreted from: https://stackoverflow.com/questions/52125163/how-to-create-a-minus-and-plus-button-to-update-a-field
}
