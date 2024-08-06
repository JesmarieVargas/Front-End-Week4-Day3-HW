// Task 1: Creating a constructor function for the Book object with properties for title, author, and pages.

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages; 
}

// Task 2: Implementing a method wthin the Book object to display book information.

Book.prototype.displayInfo = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
}

// Task 3: Creating an array to store the book objects and implementing functions to add new books and search for books by title or author.

this.library = [];

function addBook(title, author, pages) {
    const book = new Book(title, author, pages);
    library.push(book);
}

function searchByTitle(title) {
    return library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
}

function searchByAuthor(author) {
    return library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
}

// Task 4: Creating functions that utilize the filter method to filter out books that contain more than 100 pages and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.

function filterBooksByNumberOfPages() {
    return library.filter(book => book.pages <= 100);
}

function mapBooks() {
    return library.map(book => ({
        title: `Title: ${book.title}`,
        author: `Author: ${book.author}`,
        pages: book.pages
    }));
}

addBook('The Art of Happiness', 'Dalai Lama', 336);
addBook("You Become What You Think", "Shubham Kumar Singh", 186);
addBook("All The Light We Cannot See", "Anthony Doerr", 384);

console.log(library[2].displayInfo());
console.log(searchByTitle("art"));
console.log(searchByAuthor("doerr"));
console.log(filterBooksByNumberOfPages());
console.log(mapBooks());