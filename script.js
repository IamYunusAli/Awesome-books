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
  const books = JSON.parse(window.localStorage.getItem('BookList'));
  books.forEach((book) => {
    bookContainer.innerHTML += (`
        <article>
        <p class="book-title">${book.title}</p>
        <p class="book-author">${book.author}</p>
        <button class="removeBtn">Remove</button>
        <hr>
        </article>`);
  });
}
listBooks();
addBookButton.addEventListener('click', () => {
  addBooks(inputBookTitle.value, inputBookAuthor.value);
  bookContainer.innerHTML = '';
  listBooks();
  inputBookTitle.value = '';
  inputBookAuthor.value = '';
});
