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
