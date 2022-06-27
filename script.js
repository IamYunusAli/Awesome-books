/* eslint-disable linebreak-style */
const inputBookTitle = document.getElementById('title');
const inputBookAuthor = document.getElementById('author');
const addBookButton = document.querySelector('.addButton');
const bookContainer = document.getElementById('bookscontainer');

function addBooks(title, author) {
  const books = JSON.parse(window.localStorage.getItem('BookList') || '[]');
  const newBook = { title, author };
  books.push(newBook);
  window.localStorage.setItem('BookList', JSON.stringify(books));
}

function removeBook(title) {
  const books = JSON.parse(window.localStorage.getItem('BookList'));
  const keptBooks = books.filter((book) => book.title !== title);
  window.localStorage.setItem('BookList', JSON.stringify(keptBooks));
}

function listBooks() {
  const books = JSON.parse(window.localStorage.getItem('BookList') || '[]');
  for (let i = 0; i < books.length; i += 1) {
    bookContainer.innerHTML += `
        <article>
        <p class="book-title">${books[i].title}</p>
        <p class="book-author">${books[i].author}</p>
        <button class="removeBtn">Remove</button>
        <hr>
        </article>`;

    const removeButton = document.querySelectorAll('.removeBtn');
    removeButton.forEach((btn) => {
      btn.addEventListener('click', (index) => {
        const targetClass = index.target.parentElement;
        const stringTitle = targetClass.childNodes[1].textContent;
        removeBook(stringTitle);
        index.target.parentElement.remove();
      });
    });
  }
}
listBooks();
addBookButton.addEventListener('click', () => {
  addBooks(inputBookTitle.value, inputBookAuthor.value);
  bookContainer.innerHTML = '';
  listBooks();
  inputBookTitle.value = '';
  inputBookAuthor.value = '';
});
