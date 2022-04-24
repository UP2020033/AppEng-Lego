import { getProductId as itemInfo } from './item.mjs';

export function addToBasket() {
  const quantityField = document.querySelector('#quantityField');
  const itemId = itemInfo();
  const quantityValue = quantityField.value;
  localStorage.setItem(itemId, quantityValue);

  console.log(quantityValue);
}

export function clearBasket() {
  localStorage.clear();
}


/*
localStorage.setItem('penis', 'penis1');

localStorage.getItem('penis');
console.log(localStorage.getItem('penis'));

localStorage.removeItem('penis');

console.log(localStorage.legnth);
*/
