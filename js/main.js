const menuBtn = document.querySelector(".hamburger");
const menuBar = document.querySelector(".menu-bar");
const menuList = document.querySelector(".nav-menu");
const listItems = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("is-active");
  menuBar.classList.toggle("is-active");
  menuList.classList.toggle("is-active");

  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      menuBtn.classList.remove("is-active");
      menuBar.classList.remove("is-active");
      menuList.classList.remove("is-active");
    });
  });
});
