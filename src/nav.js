import './nav.css';

let nav = document.createElement('nav');
nav.id ='nav';

let home = document.createElement('a');
home.id ='home';
home.className = 'nav-item';
home.innerText = 'Home';
home.href = '#';
home.onclick = () => location.reload();
nav.appendChild(home);

let about = document.createElement('a');
about.id ='about';
about.className = 'nav-item';
about.innerText = 'About';
about.href = '#/about';
about.onclick = () => location.reload();
nav.appendChild(about);

let contact = document.createElement('a');
contact.id ='contact';
contact.className = 'nav-item';
contact.innerText = 'Contact';
contact.href = '#/contact';
contact.onclick = () => location.reload();
nav.appendChild(contact);

export default nav;
