export function findBasketItemQuantity() {
  let totalQuantity = 0;
  for (let i = 0; i < localStorage.length; i++) {
    let basketItem = localStorage.getItem(localStorage.key(i));
    basketItem = JSON.parse(basketItem);

    const itemQuantity = basketItem.quantity;
    totalQuantity = totalQuantity + Number(itemQuantity);

    console.log(totalQuantity);
    console.log(itemQuantity);
  }
  console.log(totalQuantity);
}

export async function findBasketTotalPrice() {
  let totalPrice = 0;

  for (let i = 0; i < localStorage.length; i++) {
    let basketItem = localStorage.getItem(localStorage.key(i));
    basketItem = JSON.parse(basketItem);
    // https://stackoverflow.com/questions/3138564/looping-through-localstorage-in-html5-and-javascript -- loop through local storage
    const quantity = basketItem.quantity;
    console.log(quantity);

    const response = await fetch(`/getItemPrice/${basketItem.product_id}`);
    console.log(response);
    const price = new Promise((resolve, reject) => {
      try {
        response.json()
          .then(details => {
            const productPrice = details[0].product_price;
            console.log(productPrice);
            resolve(productPrice);
          });
      } catch (err) {
        reject(err);
      }
    });
    console.log(await price);
    const itemPrice = await price;
    console.log(`${itemPrice} x ${quantity}`);
    totalPrice = itemPrice * quantity;
    console.log(totalPrice);
  }
  console.log(totalPrice);
}
