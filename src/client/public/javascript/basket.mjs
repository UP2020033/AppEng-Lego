import * as pageBuilder from './pageBuilder.mjs';

pageBuilder.buildBasketPage();

function addBasketItems() {
  const basketItemContainer = document.querySelector('.basketItemContainer');
  const basketItem = pageBuilder.createDiv('basketItem');
  basketItemContainer.append(basketItem);
  basketItem.append(pageBuilder.createImage('/public/images/brick-black1x1.jpg', 'basketImg', null));

  const basketItemDescriptionContainer = pageBuilder.createDiv('basketItemDescriptionContainer');
  basketItem.append(basketItemDescriptionContainer);
  basketItemDescriptionContainer.append(pageBuilder.createParagraph('Yo', 'basketItemDescription', null));

  const basketItemPriceContainer = pageBuilder.createDiv('basketItemPriceContainer');
  basketItem.append(basketItemPriceContainer);
  basketItemPriceContainer.append(pageBuilder.createParagraph('El price', 'basketItemParagraph'));

  addQuantityButtonListeners();
}

addBasketItems();
