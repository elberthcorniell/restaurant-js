import { createElement } from './utils'

export let Menu = () => {
  let container = createElement('div', 'home');
  let titleContainer = createElement('div', 'home-title')
  let title = createElement('h1', undefined, 'Welcome To Our Menu');
  let paragraph = createElement('p', undefined, '<strong>Delicious food made by Dominicans served at your doorstep.</strong>');
  let listItems = ['Fresh food', 'Made at order', 'Fast service', 'Nice guys'];
  let list = document.createElement('ul');
  listItems.map(item => {
    let listItem = createElement('li', undefined, item);
    list.appendChild(listItem);
  });

  titleContainer.appendChild(title);
  titleContainer.appendChild(paragraph);
  titleContainer.appendChild(list);

  container.appendChild(titleContainer);

  document.getElementById('content').appendChild(container);
}