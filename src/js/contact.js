import { createElement } from './utils';

const Contact = () => {
  let container = createElement('div', 'home');
  let titleContainer = createElement('div', 'home-title')
  let title = createElement('h1', undefined, 'Contact Us');
  let paragraph = createElement('p', undefined, '<strong>Delicious food made by Dominicans served at your doorstep.</strong>');
  let listItems = ['email', 'text', 'submit'];
  let list = document.createElement('form');
  listItems.map(item => {
    let listItem = createElement('input', undefined, item);
    listItem.type = item;
    listItem.placeholder = item;
    list.appendChild(listItem);
  });

  titleContainer.appendChild(title);
  titleContainer.appendChild(paragraph);
  titleContainer.appendChild(list);

  container.appendChild(titleContainer);

  document.getElementById('content').appendChild(container);
}

export default Contact;
