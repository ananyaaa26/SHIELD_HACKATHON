window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Function to save the booking data and update the lastBooking in localStorage
function saveBookingData() {
// Gather form data
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;
const date = document.getElementById('date').value;
const time = document.getElementById('time').value;

// Create an object with booking info
let bookingInfo = {
    name: name,
    email: email,
    phone: phone,
    date: date,
    time: time,
    fees: 999 // Fixed fee for the first appointment
};

// Save the latest booking info to localStorage as 'lastBooking'
localStorage.setItem('lastBooking', JSON.stringify(bookingInfo));

// Also maintain a history of all bookings (optional)
let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
appointments.push(bookingInfo);
localStorage.setItem('appointments', JSON.stringify(appointments));

// Redirect to checkout page (or cart page)
window.location.href = "cart.html";
}

// Attach the function to form submission
document.getElementById('AppointmentForm').addEventListener('submit', function(event) {
event.preventDefault(); // Prevent the default form submission
saveBookingData();      // Call the function to save the booking and update localStorage
this.reset();           // Optional: Reset the form after submission
});
