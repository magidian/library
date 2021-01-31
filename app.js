// const addButton = document.querySelector(".add");

// let myLibrary = [];

// function Book(title, author, numberOfPages, read) {
//   this.title = title;
//   this.author = author;
//   this.numberOfPages = numberOfPages;
//   this.read = read;
// }

// addButton.addEventListener("click", () => {
//   let newBook = prompt("add a new book: ");
//   function addBookToLibrary() {
//     myLibrary.push(newBook);
//   }

//   addBookToLibrary();
// });

// const book1 = new Book('hp','row','322','read');
// const book2 = new Book('adv','tot','325','not read');




const newBookBtn = document.querySelector(".new-book-btn");
const addBtn = document.querySelector(".add-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const cardsCtn = document.getElementById("cards-ctn");
let formCtn = document.getElementById("form-ctn");
let formFocus = document.querySelector(".bg-focus");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

renderBook = () => {
  myLibrary.forEach((Book) => {
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    cardsCtn.prepend(bookCard);

    let bookDelete = document.createElement("span");
    bookDelete.classList.add("book-del-btn");
    bookDelete.textContent = "X";
    bookCard.appendChild(bookDelete);

    let titleInfo = document.createElement("h1");
    titleInfo.classList.add("title-info");
    titleInfo.textContent = Book.title;
    bookCard.appendChild(titleInfo);

    let authorInfo = document.createElement("p");
    authorInfo.classList.add("author-info");
    authorInfo.textContent = " by " + Book.author;
    titleInfo.appendChild(authorInfo);

    let pagesInfo = document.createElement("p");
    pagesInfo.classList.add("pages-info");
    pagesInfo.textContent = Book.pages + "pages";
    authorInfo.appendChild(pagesInfo);

    let readStatus = document.createElement("p");
    readStatus.classList.add("read-status");
    bookCard.appendChild(readStatus);

    bookCompleted = () => {
      readStatus.style.color = "green";
      readStatus.textContent = "Completed";
    };

    bookNotRead = () => {
      readStatus.style.color = "red";
      readStatus.textContent = "Not read yet";
    };

    if (Book.read == true) {
      bookCompleted();
    } else {
      bookNotRead();
    }
  });
};

renderBook();

addBook = () => {
  this.title = document.getElementById("book-name").value;
  this.author = document.getElementById("author-name").value;
  this.pages = document.getElementById("page-num").value;
  this.read = document.getElementById("book-status").checked;

  let addNewBook = new Book(title, author, pages, read);
  myLibrary.push(addNewBook);

  renderBook();
};

formCtn.addEventListener("submit", (e) => {
  e.preventDefault();

  formCtn.style.display = "none";
  newBookBtn.style.opacity = "1";
  formFocus.style.display = "none";
  formCtn.reset();
});

addBookToLibrary = () => {
  formCtn.style.display = "block";
  formFocus.style.display = "block";

  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();

    formCtn.style.display = "none";
    formFocus.style.display = "none";
    newBookBtn.style.opacity = "1";
  });
};

newBookBtn.addEventListener("click", addBookToLibrary);






