const myLibrary = [];

const addBookBtn = document.querySelector('#addBookBtn');

class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
		return this.title, this.author, this.pages;
	}
}

function render() {
	const booksContainer = document.querySelector('#booksContainer');
	booksContainer.innerHTML = '';
	for (let i = 0; i < myLibrary.length; i++) {
		let book = myLibrary[i];
		const div = document.createElement('div');
		div.innerHTML = `<div data-element-${i} class='bookCard'>
                    <h3 class='title'>${book.title}</h3>
                    <h5 class='author'>${book.author}</h5>
                    <p> ${book.pages}</p>
                    <p class='read-status'>${
						book.read ? 'Read' : 'Not Read Yet'
					}</p>
        </div>
        
        `;
		booksContainer.append(div);
	}
}

function addBookToLibrary() {
	let titleInput = document.querySelector('#title').value;
	let authorInput = document.querySelector('#author').value;
	let pagesInput = document.querySelector('#pages').value;
	let readInput = document.querySelector('#read').value;
	let book = new Book(titleInput, authorInput, pagesInput, readInput);
	myLibrary.push(book);
	render();
}

addBookBtn.addEventListener('click', function (e) {
	e.preventDefault();
	addBookToLibrary();
});

myLibrary.push(new Book('Harry Potter', 'JK Rowling', '900', 'Read'));
