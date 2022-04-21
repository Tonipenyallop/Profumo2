export function getElement(idx: number) {
  return document.getElementById(`${idx}`);
}
export function getChosenItemImage(element: any): string {
  if (!element) return "";
  const src = element?.querySelector("img")?.src;
  return src;
}
export function getChosenItemPrice(element: any): string {
  if (!element) return "";
  const price = element?.querySelector(".price").innerText;
  return price;
}
export function getChosenItemName(element: any): string {
  if (!element) return "";
  const name = element?.querySelector(".name").innerText;
  // const name = chosenChildren.innerText;
  return name;
}

export function getQuantity(e: any, cart: any): number {
  const nameOfBottle = getChosenItemName(e);
  let quantity: number = 0;
  for (let key in cart) {
    if (key === nameOfBottle) quantity = cart[key];
  }
  console.log(quantity);
  return quantity;
}

export function isMoreThanTwo() {
  console.log("called isMOreTHanTew");
}
