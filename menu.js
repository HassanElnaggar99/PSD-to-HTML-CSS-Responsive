let burgerBtn = document.querySelector('#burger-nav');
let menu = document.querySelector('header nav ul');

burgerBtn.addEventListener('click', function() {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
  } else {
    menu.classList.add("open");
  }
});
