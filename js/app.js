const nav = document.querySelector("nav");
const heroSection = document.querySelector("#hero-section");

// Scrolling window evvent listener
window.addEventListener("scroll", (e) => {
  if (window.pageYOffset >= window.innerHeight - 200) {
    nav.classList.add("through");
  } else {
    nav.classList.remove("through");
  }
});
