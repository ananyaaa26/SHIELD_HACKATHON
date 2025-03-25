// document.addEventListener('DOMContentLoaded', function() {
        //     const pendingAppointmentsList = document.getElementById('pendingAppointmentsList');
        //     const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    
        //     if (appointments.length === 0) {
        //         pendingAppointmentsList.innerHTML = '<p>No pending appointments found.</p>';
        //     } else {
        //         appointments.forEach(appointment => {
        //             const appointmentItem = document.createElement('div');
        //             appointmentItem.classList.add('appointment-item');
        //             appointmentItem.innerHTML = `
        //                 <p><strong>Name:</strong> ${appointment.name}</p>
        //                 <p><strong>Email:</strong> ${appointment.email}</p>
        //                 <p><strong>Phone:</strong> ${appointment.phone}</p>
        //                 <p><strong>Date:</strong> ${appointment.date}</p>
        //                 <p><strong>Time:</strong> ${appointment.time}</p>
        //             `;
        //             pendingAppointmentsList.appendChild(appointmentItem);
        //         });
        //     }
        // });

        document.addEventListener('DOMContentLoaded', function() {
            const pendingAppointmentsList = document.getElementById('pendingAppointmentsList');
            let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        
            if (appointments.length === 0) {
                pendingAppointmentsList.innerHTML = '<p>No pending appointments found.</p>';
            } else {
                appointments.forEach((appointment, index) => {
                    const appointmentItem = document.createElement('div');
                    appointmentItem.classList.add('appointment-item');
                    const statusClass = appointment.completed ? 'completed' : 'pending';
                    const statusText = appointment.completed ? 'Completed' : 'Pending';
                    const statusColor = appointment.completed ? 'green' : 'red';
                    appointmentItem.innerHTML = `
                        <p><strong>Name:</strong> ${appointment.name}</p>
                        <p><strong>Email:</strong> ${appointment.email}</p>
                        <p><strong>Phone:</strong> ${appointment.phone}</p>
                        <p><strong>Date:</strong> ${appointment.date}</p>
                        <p><strong>Time:</strong> ${appointment.time}</p>
                        <button class="status-btn ${statusClass}" style="background-color: ${statusColor};" onclick="markAsCompleted(this, ${index})">${statusText}</button>
                        <button class="discard-btn" onclick="discardAppointment(${index})">Discard</button>
                    `;
                    pendingAppointmentsList.appendChild(appointmentItem);
                });
                }
            });
        
            function markAsCompleted(button, index) {
                let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
                appointments[index].completed = true;
                localStorage.setItem('appointments', JSON.stringify(appointments));
        
                button.classList.remove('pending');
                button.classList.add('completed');
                button.innerText = 'Completed';
                button.style.backgroundColor = 'green';
                button.style.transition = 'background-color 0.5s ease';
            }
        
            function discardAppointment(index) {
            let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
            appointments.splice(index, 1);
            localStorage.setItem('appointments', JSON.stringify(appointments));
            location.reload(); // Reload the page to update the list
        }