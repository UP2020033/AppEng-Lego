
export function createDiv(barClass) {
  const newBar = document.createElement('div');
  newBar.class = barClass;
  return newBar;
}

export function createHyperlink(text, link) {
  const navAnchor = document.createElement('a');
  navAnchor.setAttribute('href', link);
  navAnchor.innerText = text;
  navAnchor.className = 'hyperlink';
  return navAnchor;
}

createDiv('topBarDiv');
document.querySelector('.mainSection').appendChild(createDiv('topBarDiv'));
document.querySelector('.mainSection').appendChild(createDiv