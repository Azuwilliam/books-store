// Array to hold book entries
let books = [
  {
    Title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: 1004,
  },
  {
    Title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isbn: 1005,
  },
  {
    Title: 'Pride and Prejudice',
    author: 'Jane Austen',
    isbn: 1006,
  },
  {
    Title: '1984',
    author: 'George Orwell',
    isbn: 1007,
  },
  {
    Title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    isbn: 1008,
  },
  {
    Title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    isbn: 1009,
  },
  {
    Title: 'The Hunger Games',
    author: 'Suzanne Collins',
    isbn: 1010,
  },
  {
    Title: 'The Da Vinci Code',
    author: 'Dan Brown',
    isbn: 1011,
  },
  {
    Title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    isbn: 1012,
  }
];

// Function to add a book
document.getElementById('add-btn').addEventListener('click', function() {
    const titleInput = document.querySelector('.input');        // Input for title
    const authorInput = document.querySelector('.input-one');   // Input for author
    const isbnInput = document.querySelector('.input-two');     // Input for ISBN

    const bookTitle = titleInput.value.trim();                 // Get title value
    const bookAuthor = authorInput.value.trim();               // Get author value
    const bookIsbn = isbnInput.value.trim();                   // Get ISBN value

    if (bookTitle && bookAuthor && bookIsbn) {
        // Create a book object and push it to the books array
        const newBook = {
            Title: bookTitle,
            author: bookAuthor,
            isbn: bookIsbn
        };
        books.push(newBook);                                   // Add book to array
        titleInput.value = '';                                 // Clear the title input
        authorInput.value = '';                                // Clear the author input
        isbnInput.value = '';                                  // Clear the ISBN input
        alert(`Added: ${bookTitle}`);                          // Notify user
    } else {
        alert('Please fill in all fields.');                  // Alert if fields are empty
    }
});

// Function to display all books
document.getElementById('display-btn').addEventListener('click', function() {
    const displayArea = document.getElementById('display-all');
    displayArea.innerHTML = '';                               // Clear previous entries

    if (books.length === 0) {
        displayArea.textContent = 'No books available.';     // Notify if no books
        return;
    }

    books.forEach((book, index) => {
        const bookDiv = document.createElement('div');       // Create a new div for each book
        bookDiv.textContent = `${index + 1}. Title: ${book.Title}, Author: ${book.author}, ISBN: ${book.isbn}`;
        displayArea.appendChild(bookDiv);                     // Append book div to display area
    });
});

// Function to search for a book
document.getElementById('search-btn').addEventListener('click', () => {
  let searchInput = document.getElementById('search-input');
  let result = searchInput.value.trim()
  let foundBook = books.find(book => book.Title.toUpperCase() === result.toUpperCase());
  if (foundBook) {
    alert( `${foundBook.Title} by ${foundBook.author} is Available`)
  }else{
    alert( `${result} is not Available`)
  }
});
