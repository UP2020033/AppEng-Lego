// gets productId using the window location

export function getProductId() {
  let itemId = window.location.search;
  console.log(itemId);
  itemId = itemId.slice(1);
  itemId = itemId.split(':');
  itemId = itemId[1];
  return itemId;
}
