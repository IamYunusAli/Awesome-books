/* eslint-disable linebreak-style */
const inputBookTitle = document.getElementById("title");
const inputBookAuthor = document.getElementById("author");
const addBookButton = document.querySelector(".addButton");
const bookContainer = document.querySelector(".bookscontainer");
const bookCont = document.querySelector(".bookcont");
const addBook = document.getElementById("Add-book");
const addContact = document.getElementById("contact");
const notifier = document.querySelector(".errorMe");
const addLink = document.querySelector(".add-link");
const listLink = document.querySelector(".list-link");
const contactLink = document.querySelector(".contact-link");
class BookClass {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static addBooks(title, author) {
    const books = JSON.parse(window.localStorage.getItem("BookList") || "[]");
    const newBook = { title, author };
    books.push(newBook);
    window.localStorage.setItem("BookList", JSON.stringify(books));
  }

  static removeBook(title) {
    const books = JSON.parse(window.localStorage.getItem("BookList"));
    const keptBooks = books.filter((book) => book.title !== title);
    window.localStorage.setItem("BookList", JSON.stringify(keptBooks));
  }

  static listBooks() {
    const books = JSON.parse(window.localStorage.getItem("BookList") || "[]");
    for (let i = 0; i < books.length; i += 1) {
      bookContainer.innerHTML += `
        <div class="book-list">
        <div class="p-list ">
          <p class="book-title">${books[i].title}</p>
          <p class="book-author">by ${books[i].author}</p>
        </div>
        <button class="removeBtn">Remove</button>
        </div>`;

      const removeButton = document.querySelectorAll(".removeBtn");
      removeButton.forEach((btn) => {
        btn.addEventListener("click", (index) => {
          const targetClass = index.target.parentElement;
          const stringTitle =
            targetClass.childNodes[1].childNodes[1].textContent;
          BookClass.removeBook(stringTitle);
          index.target.parentElement.remove();
        });
      });
    }
  }
}
BookClass.listBooks();
addBookButton.addEventListener("click", () => {
  if (inputBookTitle.value === "" || inputBookAuthor.value === "") {
    notifier.classList.remove("hide");
  } else {
    notifier.classList.add("hide");
    BookClass.addBooks(inputBookTitle.value, inputBookAuthor.value);
    bookContainer.innerHTML = "";
    BookClass.listBooks();
    inputBookTitle.value = "";
    inputBookAuthor.value = "";
  }
});

listLink.addEventListener("click", () => {
  bookCont.classList.remove("hide");
  addContact.classList.add("hide");
  addBook.classList.add("hide");
  listLink.classList.add("active");
  addLink.classList.remove("active");
  contactLink.classList.remove("active");
});
addLink.addEventListener("click", () => {
  addBook.classList.remove("hide");
  addContact.classList.add("hide");
  bookCont.classList.add("hide");
  addLink.classList.add("active");
  listLink.classList.remove("active");
  contactLink.classList.remove("active");
});
contactLink.addEventListener("click", () => {
  addContact.classList.remove("hide");
  addBook.classList.add("hide");
  bookCont.classList.add("hide");
  contactLink.classList.add("active");
  addLink.classList.remove("active");
  listLink.classList.remove("active");
});
