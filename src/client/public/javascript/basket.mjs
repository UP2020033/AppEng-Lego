import * as pageBuilder from './pageBuilder.mjs';

function buildPage() {
  const mainSection = document.querySelector('.mainSection');
  const basketContainer = pageBuilder.createDiv('basketMainContainer');
  mainSection.append(basketContainer);
  const basketItemContainer = pageBuilder.createDiv('basketItemContainer');
  const basketCheckout = pageBuilder.createDiv('basketCheckoutContainer');
  basketItemContainer.append(basketContainer);
  basketCheckout.append(basketContainer);

  const basketTitle = pageBuilder.createDiv('basketTitle');
  basketTitle.append(pageBuilder.createParagraph('Your basket', 'basketTitleText', null));

  const basketItem = pageBuilder.createDiv('basketItem');
  // const basketItemImage = pageBuilder.createImage(`../public/images/${image}.jpg`, 'basketImg', null);

  const basketItemDescription = pageBuilder.createDiv('basketItemDescription');
  basketItemDescription.append(pageBuilder.createParagraph(''));
}


buildPage();
