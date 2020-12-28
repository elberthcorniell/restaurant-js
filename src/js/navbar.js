import { createElement } from './utils';

const menu = ['Home', 'Menu', 'Contact'];

export const Navbar = () => {
  let nav = createElement('nav', 'nav');
  menu.map(tab => {
    let link = createElement('a', 'nav-link active', tab);
    link.href = '#';
    link.id = tab.toLocaleLowerCase();
    nav.appendChild(link);
  })
  document.getElementById('content').appendChild(nav);
}
