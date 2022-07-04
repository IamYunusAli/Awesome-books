import BookClass from './bookclass.js';

const inputBookTitle = document.getElementById('title');
const inputBookAuthor = document.getElementById('author');
const addBookButton = document.querySelector('.addButton');
const bookContainer = document.querySelector('.bookscontainer');
const notifier = document.querySelector('.errorMe');

// eslint-disable-next-line import/prefer-default-export
export const interaction = addBookButton.addEventListener('click', () => {
  if (inputBookTitle.value === '' || inputBookAuthor.value === '') {
    notifier.classList.remove('hide');
  } else {
    notifier.classList.add('hide');
    BookClass.addBooks(inputBookTitle.value, inputBookAuthor.value);
    bookContainer.innerHTML = '';
    BookClass.listBooks();
    inputBookTitle.value = '';
    inputBookAuthor.value = '';
  }
});
