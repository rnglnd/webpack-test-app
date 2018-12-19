import 'main.css';
import nav from 'nav';
import main from 'main';
const about = () => import(/* webpackChunkName: 'about' */ 'about');
const contact = () => import(/* webpackChunkName: 'contact' */ 'contact');

let content = document.createElement('div');
content.id ='content';
content.appendChild(main);

if (window.location.hash === '#/about') {
  about().then(header => {
    content.removeChild(document.querySelector('#header'));
    content.appendChild(header.default);
  })
  .catch(() => {
    if (document.querySelector('#header')) {
      content.removeChild(document.querySelector('#header'));
    }
    
    let header = document.createElement('h1');
        header.id ='header';
        header.innerText = 'Error mate';
        header.className = 'error-heading';

    content.appendChild(header);
  });
}

if (window.location.hash === '#/contact') {
  contact().then(header => {
    content.removeChild(document.querySelector('#header'));
    content.appendChild(header.default);
  })
  .catch(() => {
    if (document.querySelector('#header')) {
      content.removeChild(document.querySelector('#header'));
    }

    let header = document.createElement('h1');
        header.id ='header';
        header.innerText = 'Error mate';
        header.className = 'error-heading';

    content.appendChild(header);
  });
}

document.body.appendChild(nav);
document.body.appendChild(content);
