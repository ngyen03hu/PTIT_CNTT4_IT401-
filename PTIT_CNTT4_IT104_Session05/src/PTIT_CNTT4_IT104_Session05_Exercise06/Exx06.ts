class Book {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    public getInfo(): string {
        return `"${this.title}" by ${this.author}`;
    }
}

class Library {
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public listBooks(): void {
        console.log("📚 Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }
}

const book1 = new Book("Clean Code", "Robert C. Martin");
const book2 = new Book("The Pragmatic Programmer", "Andrew Hunt");
const book3 = new Book("You Don't Know JS", "Kyle Simpson");
const book4 = new Book("Refactoring", "Martin Fowler");
const book5 = new Book("JavaScript: The Good Parts", "Douglas Crockford");

const myLibrary = new Library();

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);

myLibrary.listBooks();
