import nav from './nav';
import main from './main';
const about = import('./about');
const contact = import('./contact');

let content = document.createElement('div');
content.id ='content';
content.appendChild(main);

if (window.location.hash.includes('about')) {
  about.then(header => {
    content.removeChild(document.querySelector('#header'));
    content.appendChild(header.default);
  });
}

if (window.location.hash.includes('contact')) {
  contact.then(header => {
    content.removeChild(document.querySelector('#header'));
    content.appendChild(header.default);
  });
}

document.body.appendChild(nav);
document.body.appendChild(content);
