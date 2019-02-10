// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 50;
  var dough = 75 - scrolled;
  document.getElementById("pasta").style.height = scrolled + "%";
  //document.getElementById("pasta").style.top = scrolled + "%";
  document.getElementById("circle").style.height = dough + "px";
  document.getElementById("circle").style.top = -20 + scrolled + "px";
}
