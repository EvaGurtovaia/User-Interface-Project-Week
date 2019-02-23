// JS goes here

const toggleMenu = () => {
    menu.classList.toggle('menu--open');
    menuButtons.forEach(button => button.classList.toggle('hidden'));
  }
  
  const menu = document.querySelector ('.menu');
  const menuButtons = document.querySelectorAll('.menu-button');
  menuButtons.forEach(button =>  button.addEventListener('click', toggleMenu));