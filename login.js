 // Get the input fields
 const usernameInput = document.getElementById('username');
 const passwordInput = document.getElementById('password');
 const submitButton = document.getElementById('submit');
 
 // Add an event listener to the submit button
 submitButton.addEventListener('click', (e) => {
   // Prevent the default form submission behavior
   e.preventDefault();
 
   // Get the input values
   const username = usernameInput.value;
   const password = passwordInput.value;
 
   // Check the credentials
   if (username === 'abha' && password === 'abha') {
     // Open the doctor dashboard
     window.location.href = 'patient-dashboard.html';
   } else if (username === 'aanchal' && password === 'aanchal') {
     // Open the patient dashboard
     window.location.href = 'doctor-dashboard.html';
   } else {
     // Display an error message
     alert('Wrong credentials!');
   }
 });