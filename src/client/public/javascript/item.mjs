import * as pageCreate from './pageCreation.mjs';

// window.addEventListener('load', () => {
// fetch url pass id into fetch}
//
// )

const mainSection = document.querySelector('.mainSection');
const containerDiv = pageCreate.createDiv('itemDetailContainerDiv');
mainSection.appendChild(containerDiv);

const imageContainerDiv = pageCreate.createDiv('imageContainerDiv');
containerDiv.appendChild(imageContainerDiv);
const itemDetailImage = pageCreate.createImage('../public/images/legoBonzaiTree.jpg', 'itemDetailsImage');
imageContainerDiv.appendChild(itemDetailImage);

const itemDetailContent = pageCreate.createDiv('itemDetailContentContainer');
containerDiv.appendChild(itemDetailContent);

const itemDescriptionContainer = pageCreate.createDiv('itemDescriptionContainer');
const itemDetailDescText = pageCreate.createParagraph('Description', 'itemDetailDescText');
itemDetailContent.appendChild(itemDescriptionContainer);
itemDescriptionContainer.appendChild(itemDetailDescText);

const itemPriceContainer = pageCreate.createDiv('itemPriceContainer');
const itemDetailPriceText = pageCreate.createParagraph('Price', 'itemDetail');
itemDetailContent.appendChild(itemPriceContainer);
itemPriceContainer.appendChild(itemDetailPriceText);

const itemDetailQuantity = pageCreate.createDiv('itemQuantityContainer');
itemDetailContent.appendChild(itemDetailQuantity);

const itemAddToBasket = pageCreate.createDiv('itemAddToBasket');
itemDetailContent.appendChild(itemAddToBasket);
