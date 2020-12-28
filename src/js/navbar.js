import { createElement } from './utils'
let menu = ["Home", "Menu", "Contact"]

export let Navbar = () => {
    let nav = createElement('nav', 'nav');
    menu.map(tab => {
        let link = createElement('a', "nav-link active", tab);
        link.href = "#";
        link.id = tab.toLocaleLowerCase();
        nav.appendChild(link);
    })
    document.getElementById('content').appendChild(nav);
}
