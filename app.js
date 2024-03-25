import './index.js';
import Assign from './assign.js';

document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.querySelector('nav a[href="#home"]');
    const lessonLink = document.querySelector('nav a[href="#lesson"]');
    const assignmentLink = document.querySelector('nav a[href="#assignment"]');

    if (homeLink) {
        homeLink.addEventListener('click', event => {
            event.preventDefault();
            window.location.href = 'index.html'; // Navigasikan pengguna kembali ke halaman home
        });
    }

    if (lessonLink) {
        lessonLink.addEventListener('click', event => {
            event.preventDefault();
            window.location.href = 'lesson.html'; // Navigasikan pengguna ke halaman lesson
        });
    }

    if (assignmentLink) {
        assignmentLink.addEventListener('click', event => {
            event.preventDefault();
            window.location.href = 'assignment.html'; 
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('assignmentForm');

    form.addEventListener('submit', event => {
        event.preventDefault();

        // Dapatkan nilai dari setiap elemen input pada form
        const title = document.getElementById('titleInput').value;
        const body = document.getElementById('bodyInput').value;
        const deadline = document.getElementById('deadlineInput').value;
        const link = document.getElementById('linkInput').value;

        // Buat objek baru yang berisi data dari form
        const newAssignment = {
            title: title,
            body: body,
            deadline: deadline,
            link: link
        };

        // Panggil metode add dari kelas Assign dengan objek data baru sebagai argumen
        Assign.add(newAssignment);

        // Perbarui tampilan daftar tugas dengan menambahkan elemen assign-item baru
        const assignList = document.querySelector('assign-list');
        const assignItem = document.createElement('assign-item');
        assignItem.note = newAssignment;
        assignList.appendChild(assignItem);

        // Reset form setelah pengiriman data
        form.reset();
    });
});