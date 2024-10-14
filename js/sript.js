// Select all "Remove" buttons
const removeButtons = document.querySelectorAll('.remove');

// Add click event listener to each "Remove" button
removeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Find the parent div of the clicked button and remove it
        const bookDiv = this.parentElement.parentElement;
        bookDiv.remove();
    });
});

// Select all "Read" buttons
const readButtons = document.querySelectorAll('.read');

// Add click event listener to each "Read" button
readButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Display an alert with the author's name
        const author = this.parentElement.querySelector('p').innerText;
        alert(`You are about to borrow a book by: ${author}`);
        // Alternatively, you could redirect to a new page
        // window.location.href = 'borrow.html'; // example redirect
    });
});
