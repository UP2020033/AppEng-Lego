export function findBasketItemQuantity() {
  let totalQuantity = 0;
  // Loop through localStorage, take the quantity property value in the object and add it to the total quantity in each interation
  for (let i = 0; i < localStorage.length; i++) {
    let basketItem = localStorage.getItem(localStorage.key(i));
    basketItem = JSON.parse(basketItem);
    // (Flaschen, 2010)
    const itemQuantity = basketItem.quantity;
    totalQuantity = totalQuantity + Number(itemQuantity);
  }
  console.log(totalQuantity);
  return totalQuantity;
}

export async function findBasketTotalPrice() {
  let totalPrice = 0;

  for (let i = 0; i < localStorage.length; i++) {
    let basketItem = localStorage.getItem(localStorage.key(i));
    basketItem = JSON.parse(basketItem);
    // (Flaschen, 2010)
    const quantity = basketItem.quantity;

    const response = await fetch(`/getItemPrice/${basketItem.product_id}`);
    // reponse returns a promise, adding a new promise to resolve it
    const price = new Promise((resolve, reject) => {
      try {
        response.json()
          .then(details => {
            const productPrice = details[0].product_price;
            resolve(productPrice);
          });
      } catch (err) {
        reject(err);
      }
    });
    // price needs to be awaited, as the code was being executed before I resolved the promise above
    const itemPrice = await price;
    totalPrice = totalPrice + itemPrice * quantity;
    console.log(totalPrice);
  }
  console.log(totalPrice);
  return totalPrice;
}
