export function findBasketItemQuantity() {
  let totalQuantity = 0;
  // Loop through localStorage, take the quantity property value in the object and add it to the total quantity in each interation
  for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage);
    let basketItem = localStorage.getItem(localStorage.key(i));
    basketItem = JSON.parse(basketItem);
    // (Flaschen, 2010)
    const itemQuantity = basketItem.quantity;
    totalQuantity = totalQuantity + parseInt(itemQuantity, 10);
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
    totalPrice = totalPrice + (itemPrice * quantity);
    console.log(totalPrice);
  }
  console.log(totalPrice);
  return totalPrice;
}

export async function getBasketTotalPrice() {
  const getTotalPrice = findBasketTotalPrice();
  const getPrice = new Promise((resolve, reject) => {
    try {
      getTotalPrice.then(finalPrice => {
        console.log(finalPrice);
        resolve(finalPrice);
      });
    } catch (err) {
      reject(err);
    }
  });
  const finalPrice = await getPrice;
  const finalPriceFixed = finalPrice.toFixed(2);
  // (admin, 2021)
  return finalPriceFixed;
}

function submitOrder() {
  for (let i = 0; i < localStorage.length; i++) {
    let basketItem = localStorage.getItem(localStorage.key(i));
    basketItem = JSON.parse(basketItem);

    const basketQuantity = basketItem.quantity;
    console.log(basketQuantity);
  }
}

submitOrder();

// export async function addToCheckout() {
//   const basketQuantity = document.querySelector('.basketQuantityText');
//   const basketPrice = document.querySelector('.basketTotalPrice');
//   let totalQuantity = findBasketItemQuantity();
//   const getTotalPrice = await getBasketTotalPrice();

//   totalQuantity = totalQuantity - 1;
//   console.log(basketQuantity);
//   basketQuantity.textContent = 'Total number of items:';
//   console.log(basketQuantity);
//   console.log(totalQuantity);
//   console.log(getTotalPrice);
// }

// export async function removeFromCheckout() {
//   const basketQuantity = document.querySelector('.basketQuantityText');
//   const basketPrice = document.querySelector('.basketTotalPrice');
//   let totalQuantity = findBasketItemQuantity();
//   const getTotalPrice = await getBasketTotalPrice();

//   totalQuantity = totalQuantity - 1;
//   console.log(basketQuantity);
//   basketQuantity.textContent = 'Total number of items:';
//   console.log(basketQuantity);
//   console.log(totalQuantity);
//   console.log(getTotalPrice);
// }
// basketQuantity.text.replace(`Total number of items ${}`) =
