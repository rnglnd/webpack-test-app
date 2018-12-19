let header = document.createElement('h1');
header.id ='header';
if (window.location.hash === '') {
  header.innerText = 'A lovely landing page';
}

export default header;
