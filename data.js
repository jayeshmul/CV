function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

window.onscroll = function () {
  const scrollBtn = document.getElementById("scrollUp");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
