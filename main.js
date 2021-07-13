function toggleM() {
    const toggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

mybutton = document.getElementById("btnScrollToTop");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0;
  $("html, body").animate({ scrollTop: 0}, "slow");
}