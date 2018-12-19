import './main.css';
import nav from './nav';
// const nav = import(/* webpackPrefetch: true */ './nav');
import main from './main';
// const about = import('./about');
// const contact = import('./contact');
const about = import(/* webpackChunkName: 'about' */ './about');
const contact = import(/* webpackChunkName: 'contact' */ './contact');

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

// nav.then(n => {
//   document.body.appendChild(n.default);
//   document.body.appendChild(content);
// });

document.body.appendChild(nav);
document.body.appendChild(content);
