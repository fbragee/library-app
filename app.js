const myLibrary = [];

const addBookBtn = document.querySelector('#addBookBtn');

class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
}

Book.prototype.toggleRead = function () {
	this.read = !this.read;
};

function toggleRead(index) {
	myLibrary[index].toggleRead();
	render();
}

function render() {
	const booksContainer = document.querySelector('#booksContainer');
	booksContainer.innerHTML = '';
	for (let i = 0; i < myLibrary.length; i++) {
		let book = myLibrary[i];
		const div = document.createElement('div');
		div.innerHTML = `<div class='bookCard'>
                    <h3 class='title'>${book.title}</h3>
                    <h5 class='author'>${book.author}</h5>
                    <p> ${book.pages} pages</p>
                    <li>
                    <p class='read-status'>${
						book.read ? 'Read' : 'Not Read Yet'
					}</p> <input id='cardRead' class='cardRead' type='checkbox' onclick='toggleRead(${i})'></li>
                    <button id='removeBtn' class='removeBtn' onclick='removeBook(${i})'>Remove</button>

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

function removeBook(index) {
	myLibrary.splice(index, 1);
	render();
}
