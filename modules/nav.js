const bookCont = document.querySelector('.bookcont');
const addBook = document.getElementById('Add-book');
const addContact = document.getElementById('contact');
const addLink = document.querySelector('.add-link');
const listLink = document.querySelector('.list-link');
const contactLink = document.querySelector('.contact-link');

export const displayLink = listLink.addEventListener('click', () => {
  bookCont.classList.remove('hide');
  addContact.classList.add('hide');
  addBook.classList.add('hide');
  listLink.classList.add('active');
  addLink.classList.remove('active');
  contactLink.classList.remove('active');
});
export const displayAdd = addLink.addEventListener('click', () => {
  addBook.classList.remove('hide');
  addContact.classList.add('hide');
  bookCont.classList.add('hide');
  addLink.classList.add('active');
  listLink.classList.remove('active');
  contactLink.classList.remove('active');
});
export const displayContact = contactLink.addEventListener('click', () => {
  addContact.classList.remove('hide');
  addBook.classList.add('hide');
  bookCont.classList.add('hide');
  contactLink.classList.add('active');
  addLink.classList.remove('active');
  listLink.classList.remove('active');
});
