import * as pageBuilder from './pageBuilder.mjs';
import * as basketFunc from './basketFunctionality.mjs';
import * as checkout from './checkout.mjs';

pageBuilder.buildBasketPage();

// displaybasketItems loops invokes the returned array of objects returned from findBasketItems and utilises the information.
// it utilises the information returned from addBasketItems to display the necessary information.

async function displayBasketItems() {
  const basketItems = await basketFunc.findBasketItems();
  console.log(basketItems);
  for (const param of basketItems) {
    addBasketItems(param.product_id, param.product_description, param.product_image_link, param.product_price);
    console.log(param);
    // console.log(basketItems);
  }
}

// addBasketItems adds the html elements required and gathers the information that is required to display on screen.

function addBasketItems(id, description, image, price) {
  const basketItemContainer = document.querySelector('.basketItemContainer');
  const basketItem = pageBuilder.createDiv('basketItem', `item:${id}`);
  const imageContainer = pageBuilder.createDiv('imageContainer');

  console.log(basketItem);
  basketItemContainer.append(basketItem);
  basketItem.append(imageContainer);

  const img = pageBuilder.createImage(`/public/images/${image}.jpg`, 'basketImg', null);
  const basketInfoContainer = pageBuilder.createDiv('basketInfoContainer');
  const basketItemDescriptionContainer = pageBuilder.createDiv('basketItemDescriptionContainer');
  imageContainer.append(img);

  basketItem.append(basketInfoContainer);
  basketInfoContainer.append(basketItemDescriptionContainer);
  basketItemDescriptionContainer.append(pageBuilder.createParagraph(`${description}`, 'basketItemDescription', null));

  const basketItemPriceContainer = pageBuilder.createDiv('basketItemPriceContainer');
  basketInfoContainer.append(basketItemPriceContainer);
  basketItemPriceContainer.append(pageBuilder.createParagraph(`£${price}`, 'basketItemPrice'));

  const basketQuantityFieldContainer = pageBuilder.createDiv('basketQuantityFieldContainer');
  basketItem.append(basketQuantityFieldContainer);

  const removeItemButtonContainer = pageBuilder.createDiv('removeBasketItemContainer');
  const removeItemButton = pageBuilder.createButton(`remove:${id}`, 'removeBasketItem', 'Remove');
  basketItem.append(removeItemButtonContainer);
  removeItemButtonContainer.append(removeItemButton);
  console.log(removeItemButton.parentElement.parentElement);

  pageBuilder.basketQuantityFieldButtons(basketQuantityFieldContainer, id);
  basketFunc.addQuantityButtonListeners(id);
  removeItemButton.addEventListener('click', basketFunc.removeItemFromBasket);
}

// Adds the checkout information and required by invoking the necessary functins to get the price and quantity.

async function addCheckoutDetails() {
  const totalPrice = await checkout.getBasketTotalPrice();
  console.log(totalPrice);

  const totalQuantity = checkout.findBasketItemQuantity();
  console.log(totalQuantity);
  const orderDetails = pageBuilder.createDiv('orderDetailsTitleContainer');
  const orderDetailsText = pageBuilder.createParagraph('Order Summary', 'orderDetailsTitle', null);
  const orderDetailsQuantityText = pageBuilder.createParagraph(`Total number of items:${totalQuantity}`, 'basketQuantityText', null);
  const orderDetailsCostText = pageBuilder.createParagraph(`Subtotal: £${totalPrice}`, 'basketTotalPrice', null);

  const checkoutContainer = document.querySelector('.basketCheckoutContainer');

  const checkoutButtonContainer = pageBuilder.createDiv('checkoutButtonContainer');
  const checkoutButton = pageBuilder.createButton(null, 'checkoutButton', 'Checkout');

  checkoutContainer.append(orderDetails);
  orderDetails.append(orderDetailsText);

  checkoutContainer.append(orderDetailsQuantityText);
  checkoutContainer.append(orderDetailsCostText);
  checkoutContainer.append(checkoutButtonContainer);
  checkoutContainer.append(checkoutButton);

  checkoutButton.addEventListener('click', checkout.submitOrder);
}


function init() {
  displayBasketItems();
  addCheckoutDetails();
}

checkout.findBasketItemQuantity();
checkout.findBasketTotalPrice();
checkout.findBasketTotalPrice();


window.addEventListener('load', init);
