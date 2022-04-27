import * as pageBuilder from './pageBuilder.mjs';

pageBuilder.buildBasketPage();

function addBasketItemDetails() {
  const basketItemContainer = document.querySelector('.basketItemContainer');
  const basketItem = pageBuilder.createDiv('basketItem');
  const imageContainer = pageBuilder.createDiv('imageContainer');
  basketItemContainer.append(basketItem);
  basketItem.append(imageContainer);

  const image = pageBuilder.createImage('/public/images/AT-AT.jpg', 'basketImg', null);
  const basketInfoContainer = pageBuilder.createDiv('basketInfoContainer');
  const basketItemDescriptionContainer = pageBuilder.createDiv('basketItemDescriptionContainer');
  imageContainer.append(image);

  basketItem.append(basketInfoContainer);
  basketInfoContainer.append(basketItemDescriptionContainer);
  basketItemDescriptionContainer.append(pageBuilder.createParagraph('Yo', 'basketItemDescription', null));

  const basketItemPriceContainer = pageBuilder.createDiv('basketItemPriceContainer');
  basketInfoContainer.append(basketItemPriceContainer);
  basketItemPriceContainer.append(pageBuilder.createParagraph('El price', 'basketItemPrice'));

  const basketQuantityFieldContainer = pageBuilder.createDiv('basketQuantityFieldContainer');
  basketItem.append(basketQuantityFieldContainer);

  pageBuilder.basketQuantityFieldButtons(basketQuantityFieldContainer);
  pageBuilder.addQuantityButtonListeners();
}

function addCheckoutDetails() {
  const orderDetails = pageBuilder.createDiv('orderDetailsTitleContainer');
  const orderDetailsText = pageBuilder.createParagraph('Order Summary', 'orderDetailsTitle', null);
  const orderDetailsQuantityText = pageBuilder.createParagraph('Total number of items:', 'basketQuantityText', null);
  const orderDetailsCostText = pageBuilder.createParagraph('Subtotal: £20.00', 'basketTotalPrice', null);

  const checkoutContainer = document.querySelector('.basketCheckoutContainer');

  const checkoutButtonContainer = pageBuilder.createDiv('checkoutButtonContainer');
  const checkoutButton = pageBuilder.createButton(null, 'checkoutButton', 'Checkout');

  checkoutContainer.append(orderDetails);
  console.log(orderDetails);
  orderDetails.append(orderDetailsText);

  checkoutContainer.append(orderDetailsQuantityText);
  checkoutContainer.append(orderDetailsCostText);
  checkoutContainer.append(checkoutButtonContainer);
  checkoutContainer.append(checkoutButton);
}

function createBasketDataObject() {
}

function init() {
  addBasketItemDetails();
  addCheckoutDetails();
}

addBasketItemDetails();
addBasketItemDetails();
addBasketItemDetails();

window.addEventListener('load', init);


console.log(window.localStorage.getItem('Test'));
