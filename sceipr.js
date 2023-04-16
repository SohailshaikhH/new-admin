function toggleNav() {
  navSize = document.querySelector(".sidebar").style.width;
  if (navSize == "300px") {
    return close();
  }
  return open();
}
function open() {
  document.querySelector(".sidebar").style.width = "300px";
  document.querySelector(".section-hero").style.marginLeft = "280px";
}
function close() {
  document.querySelector(".sidebar").style.width = "0px";
  document.querySelector(".section-hero").style.marginLeft = "0px";
}
