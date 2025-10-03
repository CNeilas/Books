function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("Use operator new to make the object dumbass");
  }

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
