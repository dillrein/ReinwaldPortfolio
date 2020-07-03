// navbar hide and show
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("NavbarMain").style.top = "-50px";
  } else {
    document.getElementById("NavbarMain").style.top = "0px";
  }
  prevScrollpos = currentScrollPos;
}