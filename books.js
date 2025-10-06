const form = document.querySelector("form");
const box = document.getElementById("box");
const toggeDialog = document.getElementById("toggleDialog");
const dialog = document.querySelector("dialog");

const booksArray = [];

const addBook = (e) => {
  e.preventDefault();

  const titleValue = e.target.title.value;
  const authorValue = e.target.author.value;
  const pagesValue = e.target.pages.value;
  const didRead = e.target.isRead.value == "yes" ? true : false;
  //book buttons toggle read
  const optionsValue =
    e.target.isRead.value == "yes" ? "Read Already" : "Haven't Read It";

  const book = new Book(titleValue, authorValue, pagesValue, didRead);
  booksArray.push(book);

  renderBook(book);
};

const renderBook = (book) => {
  const bookDiv = document.createElement("div");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete Book";
  deleteBtn.id = "delete";

  const toggleReadBtn = document.createElement("button");
  toggleReadBtn.textContent = book.read ? "Didn't read" : "Yes readed";
  toggleReadBtn.id = "toggleRead";

  const titleDiv = document.createElement("h1");
  const authorDiv = document.createElement("p");
  const pagesDiv = document.createElement("p");
  const readDiv = document.createElement("p");

  titleDiv.textContent = book.title;
  authorDiv.textContent = book.author;
  pagesDiv.textContent = book.pages + " pages";
  readDiv.textContent = book.read ? "Yes, readed" : "nah, not";

  bookDiv.className = "book";

  const childArr = [
    titleDiv,
    authorDiv,
    pagesDiv,
    readDiv,
    deleteBtn,
    toggleReadBtn,
  ];

  for (const child of childArr) {
    bookDiv.appendChild(child);
  }

  box.appendChild(bookDiv);

  deleteBtn.addEventListener("click", (e) => {
    deleteBtn.parentElement.remove();
  });

  toggleReadBtn.addEventListener("click", (e) => {
    if (book.read === true) {
      book.read = false;
      readDiv.textContent = book.read ? "Yes, readed" : "nah, not";
      toggleReadBtn.textContent = book.read ? "Didn't read" : "Yes readed";
    } else if (book.read === false) {
      book.read = true;
      readDiv.textContent = book.read ? "Yes, readed" : "nah, not";
      toggleReadBtn.textContent = book.read ? "Didn't read" : "Yes readed";
    }
  });
};

//Book constructor
function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("Use operator new to make the object dumbass");
  }
  this.id == crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      read ? "have already read it" : "not read yet"
    }.`;
  };
}

form.addEventListener("submit", addBook);
toggeDialog.addEventListener("click", (e) => {
  dialog.toggleAttribute("open");
});
