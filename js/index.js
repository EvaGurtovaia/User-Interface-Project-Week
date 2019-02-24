// JS goes here

const toggleMenu = () => {
    menu.classList.toggle('menu--open');
    menuButtons.forEach(button => button.classList.toggle('hidden'));
  }
  
  const menu = document.querySelector ('.menu');
  const menuButtons = document.querySelectorAll('.menu-button');
  menuButtons.forEach(button =>  button.addEventListener('click', toggleMenu));

  class Tabs {
    constructor(tabElement) {
        this.tabElement = tabElement;

         // convert array-like to array list
        this.links = Array.from(this.tabElement.querySelector('.tab-links').querySelectorAll('.tab-link')).map(newTab => new Link(newTab));

         // mouse hover over when cycle through each new tab link.
        this.links.forEach(mouseHover => {
            mouseHover.link.addEventListener('mouseenter', (event) => {
                event.target.style.cursor = 'pointer';
                mouseHover.link.classList.add('hover');
            });
            mouseHover.link.addEventListener('mouseleave', (event) => {
                mouseHover.link.classList.remove('hover');
            });
            mouseHover.link.addEventListener('click', () => {
                mouseHover.link.classList.remove('hover');

                 // cycle through each tab when clicked and hide previous tab
                this.links.forEach(hideTab => hideTab.content.classList.add('hide'));
                this.links.forEach(removeTab => removeTab.link.classList.remove('clicked'));

                 // select method created from below
                mouseHover.select();
            });
        });
        this.links[0].select();
    }
}

 class Link {
    constructor(link) {
        this.link = link;
        this.data = this.link.dataset.tab;
        this.content = document.querySelector(`.tab-content[data-tab='${this.data}']`);
    }
    select() {
        this.link.classList.add('clicked');
        this.content.classList.remove('hide');
    }
}

//Service page
class TabLink {
  constructor(element) {

       this.element = element;
       this.data = this.element.dataset.tab;
       this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
       this.tabItem = new TabItem(this.item);
       this.element.addEventListener('click', () => {
           this.select()
       });
  };

   select() {
       const links = document.querySelectorAll('.tabs-link');
       links.forEach(link => {
          link.classList.remove('tabs-link-selected')
      });
       this.element.classList.add('tabs-link-selected');
       this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
      this.element = element;
  }

   select() {
      const items = document.querySelectorAll('.tabs-item');
       items.forEach(item => {
          item.classList.remove('tabs-item-selected');
      })
      this.element.classList.add('tabs-item-selected');
  }
}



let links = document.querySelectorAll('.tabs-link').forEach(link => new TabLink(link));
