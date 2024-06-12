// Save email and notes in local storage
function saveEmail(email, password) {
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  localStorage.setItem(`notes-${email}`, '[]');
}

// Check user login
function checkUserLogin() {
  const email = localStorage.getItem('email');
  const password = localStorage.getItem('password');
  if (email && password) {
    showHomePage(email);
  } else {
    showLoginPage();
  }
}

// Show login page
function showLoginPage() {
  document.getElementById('loginContainer').style.display = 'block';
  document.getElementById('notesContainer').style.display = 'none';
}

// Show home page
function showHomePage(email) {
  document.getElementById('loginContainer').style.display = 'none';
  document.getElementById('notesContainer').style.display = 'block';
  if (email === 'admin@gmail.com') {
    displayAllNotes();
  } else {
    displayNotes(email);
  }
}

// Login user
function loginUser() {
  const emailInput = document.getElementById('emailInput');
  const passwordInput = document.getElementById('passwordInput');
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  if (email && password) {
    saveEmail(email, password);
    showHomePage(email);
  }
}

// Submit note
function submitNote() {
  const email = localStorage.getItem('email');
  const noteInput = document.getElementById('noteInput');
  const categorySelect = document.getElementById('categorySelect');
  const note = noteInput.value.trim();
  const category = categorySelect.value;
  if (note && category) {
    const notes = JSON.parse(localStorage.getItem(`notes-${email}`) || '[]');
    const isEditing = notes.some(note => note.isEditing);
    
    // If editing an existing note, update it
    if (isEditing) {
      const editedNote = notes.find(note => note.isEditing);
      editedNote.note = note;
      editedNote.category = category;
      editedNote.isEditing = false;
    } else {
      // Otherwise, add a new note
      notes.push({ note, category, email, date: new Date().toLocaleString(), isEditing: false });
    }
    
    localStorage.setItem(`notes-${email}`, JSON.stringify(notes));
    noteInput.value = '';
    categorySelect.value = '';
    displayNotes(email);
  }
}

// Display notes
function displayNotes(email) {
  const notesList = document.getElementById('notesList');
  const notes = JSON.parse(localStorage.getItem(`notes-${email}`) || '[]');
  notesList.innerHTML = '';
  notes.forEach((note, index) => {
    const noteItem = document.createElement('li');
    noteItem.className = 'mb-2';
    noteItem.innerHTML = `
      ${note.note} <br>
      <small>Category: ${note.category}</small> <br>
      <small>${note.email}</small> <br>
      <small>${note.date}</small>
      <button onclick="editNote('${email}', ${index})" class="ml-2 text-blue-400 hover:underline">Edit</button>
      <button onclick="deleteNote('${email}', ${index})" class="ml-2 text-red-400 hover:underline">Delete</button>
    `;
    notesList.appendChild(noteItem);
  });
}

// Display all notes for admin
function displayAllNotes() {
  const notesList = document.getElementById('notesList');
  notesList.innerHTML = '';
  const users = Object.keys(localStorage).filter(key => key.startsWith('notes-'));
  users.forEach(userKey => {
    const notes = JSON.parse(localStorage.getItem(userKey) || '[]');
    notes.forEach(note => {
      const noteItem = document.createElement('li');
      noteItem.className = 'mb-2';
      noteItem.innerHTML = `
        ${note.note} <br>
        <small>Category: ${note.category}</small> <br>
        <small>${note.email}</small> <br>
        <small>${note.date}</small>
      `;
      notesList.appendChild(noteItem);
    });
  });
}

// Filter notes by category
function filterNotes() {
  const email = localStorage.getItem('email');
  const filterSelect = document.getElementById('filterSelect');
  const selectedCategory = filterSelect.value;
  const notesList = document.getElementById('notesList');
  notesList.innerHTML = '';
  let notes = JSON.parse(localStorage.getItem(`notes-${email}`) || '[]');

  if (selectedCategory) {
    notes = notes.filter(note => note.category === selectedCategory);
  }

  notes.forEach((note, index) => {
    const noteItem = document.createElement('li');
    noteItem.className = 'mb-2';
    noteItem.innerHTML = `
      ${note.note} <br>
      <small>Category: ${note.category}</small> <br>
      <small>${note.email}</small> <br>
      <small>${note.date}</small>
      <button onclick="editNote('${email}', ${index})" class="ml-2 text-blue-400 hover:underline">Edit</button>
      <button onclick="deleteNote('${email}', ${index})" class="ml-2 text-red-400 hover:underline">Delete</button>
    `;
    notesList.appendChild(noteItem);
  });
}

// Edit note
function editNote(email, index) {
  const notes = JSON.parse(localStorage.getItem(`notes-${email}`) || '[]');
  const noteToEdit = notes[index];
  document.getElementById('noteInput').value = noteToEdit.note;
  document.getElementById('categorySelect').value = noteToEdit.category;
  noteToEdit.isEditing = true;
  localStorage.setItem(`notes-${email}`, JSON.stringify(notes));
}

// Delete note
function deleteNote(email, index) {
  const notes = JSON.parse(localStorage.getItem(`notes-${email}`) || '[]');
  notes.splice(index, 1);
  localStorage.setItem(`notes-${email}`, JSON.stringify(notes));
  displayNotes(email);
}

// Logout
function logout() {
  localStorage.removeItem('email');
  localStorage.removeItem('password');
  showLoginPage();
}

// Initial load
document.addEventListener('DOMContentLoaded', checkUserLogin);
