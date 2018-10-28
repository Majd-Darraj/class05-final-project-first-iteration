let scroll = window.offsetY;
let itemsBefore = document.querySelector(".itemBefore");
let mapFix = document.querySelector(".map-container");
let headerOffsetTop = itemsBefore.offsetTop;
console.log(itemsBefore);

export function Fixer() {
  if (scroll >= headerOffsetTop) {
    mapFix.style.position = "fixed";
  } else {
    mapFix.style.position = "inheret";
  }
}
