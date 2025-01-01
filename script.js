
const menuIcon = document.querySelector("#menu-icon");
const navBar = document.querySelector(".navbar");
const offIcon = document.querySelector("#off-icon");

menuIcon.addEventListener('click', () => {
navBar.classList.toggle('active');
offIcon.classList.toggle('active');
})
  