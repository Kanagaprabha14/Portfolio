// JavaScript for handling the contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate input
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate sending a message (you can replace this with an actual API call)
    alert(`Thank you, ${name}! Your message has been sent successfully.`);

    // Clear the form
    document.getElementById('contact-form').reset();
});