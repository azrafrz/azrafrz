import Utils from './utils.js';
import Assign from './assign.js';

const RENDER_EVENT = 'render-assign';
const SAVED_EVENT = 'saved-assign';
const STORAGE_KEY = 'ASSIGN_APPS';

const home = () => {
    console.log('DOMContentLoaded event triggered. home() function is running...');

    const assignContainer = document.querySelector('#assignContainer');
    const assignListElement = assignContainer.querySelector('assign-list');

    const displayAssigns = (assigns) => { 
        const assignItemElements = assigns.map((assign) => {
          const assignItemElement = document.createElement('assign-item');
          assignItemElement.assign = assign;
          return assignItemElement;
        });
    
        Utils.emptyElement(assignListElement);
        assignListElement.append(...assignItemElements);
      };
    
    const allAssigns = Assign.getAll();
    displayAssigns(allAssigns);

    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const titleInput = document.getElementById('titleInput');
        const bodyInput = document.getElementById('bodyInput');
        const deadlineInput = document.getElementById('deadlineInput');
        const linkInput = document.getElementById('linkInput');
    
        function generateID() {
            return Date.now(); // Menghasilkan ID unik berdasarkan waktu
        }

        const newAssign = {
            id: generateID(),
            title: titleInput.value,
            body: bodyInput.value,
            deadline: deadlineInput.value,
            link: linkInput.value
        };

        Assign.add(newAssign);
        saveData();

        const updatedAssigns = Assign.getAll();
        displayAssigns(updatedAssigns);

        // Reset nilai input setelah submit
        titleInput.value = '';
        bodyInput.value = '';
        deadlineInput.value = '';
        linkInput.value = '';
    });

    function saveData() {
        console.log('Saving data to local storage...');
        if (isStorageExist()) {
            const parsed = JSON.stringify(Assign.getAll());
            localStorage.setItem(STORAGE_KEY, parsed);
            console.log('Data saved successfully:', parsed); // Tambahkan log untuk memeriksa apakah data disimpan
            document.dispatchEvent(new Event(SAVED_EVENT));
        } else {
            console.error('Local storage is not available.'); // Tambahkan log untuk memeriksa jika local storage tidak tersedia
        }
    }

    function isStorageExist() {
        console.log('Checking if local storage exists...');
        return typeof Storage !== 'undefined'; // Memeriksa apakah browser mendukung localStorage
    }

    function loadDataFromStorage() {
        const serializedData = localStorage.getItem(STORAGE_KEY);
        return serializedData ? JSON.parse(serializedData) : []; // Mengembalikan data dari localStorage jika ada
    }

    if (isStorageExist()) {
        const loadedAssigns = loadDataFromStorage();
        loadedAssigns.forEach(assign => Assign.add(assign));
        document.dispatchEvent(new Event(RENDER_EVENT));
    }
};

export default home;