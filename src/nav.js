let nav = document.createElement('div');
nav.id ='nav';

let home = document.createElement('a');
home.id ='home';
home.innerText = 'Home';
home.href = '#';
home.onclick = () => location.reload();
nav.appendChild(home);

let about = document.createElement('a');
about.id ='about';
about.innerText = 'About';
about.href = '#/about';
about.onclick = () => location.reload();
nav.appendChild(about);

let contact = document.createElement('a');
contact.id ='contact';
contact.innerText = 'Contact';
contact.href = '#/contact';
contact.onclick = () => location.reload();
nav.appendChild(contact);

export default nav;
