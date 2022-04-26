import * as pageBuilder from './pageBuilder.mjs';

pageBuilder.buildBasketPage();

function addBasketItems() {
  const basketItemContainer = document.querySelector('.basketItemContainer');
  const basketItem = pageBuilder.createDiv('basketItem');
  basketItemContainer.append(basketItem);
  basketItem.append(pageBuilder.createDiv('imageContainer'));
  const imageContainerDiv = document.querySelector('.imageContainer');
  imageContainerDiv.append(pageBuilder.createImage('/public/images/brick-black1x1.jpg', 'basketImg', null));

  const basketInfoContainer = pageBuilder.createDiv('basketInfoContainer');
  const basketItemDescriptionContainer = pageBuilder.createDiv('basketItemDescriptionContainer');
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

  const orderDetails = pageBuilder.createDiv('orderDetailsTitleContainer');
  const orderDetailsText = pageBuilder.createParagraph('Order Summary', 'orderDetailsTitle', null);

  const orderDetailsQuantityText = pageBuilder.createParagraph('Total number of items:', 'basketQuantityText', null);
  const orderDetailsCostText = pageBuilder.createParagraph('Subtotal: £20.00', 'basketTotalPrice', null);

  const checkoutContainer = document.querySelector('.basketCheckoutContainer');


  checkoutContainer.append(orderDetails);
  console.log(orderDetails);
  orderDetails.append(orderDetailsText);

  checkoutContainer.append(orderDetailsQuantityText);
  checkoutContainer.append(orderDetailsCostText);
}

addBasketItems();
