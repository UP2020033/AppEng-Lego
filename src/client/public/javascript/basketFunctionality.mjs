export function addToBasket(productId) {
  const quantityField = document.querySelector('#quantityField');
  const itemId = productId.split(':')[1];
  const quantityValue = quantityField.value;

  const itemToAdd = {
    product_id: itemId,
    quantity: quantityValue,
  };

  localStorage.setItem(itemId, JSON.stringify(itemToAdd));
  console.log(quantityValue);
}

export function addToBasketListener() {
  const addBasket = document.querySelector('.addItemToBasketButton');
  const id = addBasket.id;
  console.log('test');
  console.log(addToBasket);
  addBasket.addEventListener('click', () => {
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
