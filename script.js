const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Get references to the sign-in and sign-up forms
const signInForm = document.querySelector('.sign-in form');
const signUpForm = document.querySelector('.sign-up form');

// Add event listeners for form submissions
signInForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from actually submitting
    // You can add validation and authentication logic here
    // If the login is successful, redirect to the home page
    window.location.href = 'home.html';
});

signUpForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from actually submitting
    // You can add registration and validation logic here
    // If the registration is successful, redirect to the home page
    window.location.href = 'home.html';
});
