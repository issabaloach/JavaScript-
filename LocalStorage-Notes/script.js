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
    displayNotes(email);
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
  function submitNote(email) {
    const noteInput = document.getElementById('noteInput');
    const note = noteInput.value.trim();
    if (note) {
      const notes = JSON.parse(localStorage.getItem(`notes-${email}`) || '[]');
      const isEditing = notes.some(n => n.isEditing);
  
      if (isEditing) {
        // If a note is being edited, update the edited note
        const editedNote = notes.find(n => n.isEditing);
        editedNote.text = note;
        editedNote.isEditing = false;
      } else {
        // Otherwise, create a new note
        notes.push({ text: note, isEditing: false });
      }
  
      localStorage.setItem(`notes-${email}`, JSON.stringify(notes));
      noteInput.value = '';
      displayNotes(email);
    }
  }
  
  // Display notes
  function displayNotes(email) {
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = '';
    const notes = JSON.parse(localStorage.getItem(`notes-${email}`) || '[]');
    notes.forEach((note, index) => {
      const li = document.createElement('li');
      li.classList.add('flex', 'items-center', 'justify-between', 'mb-1');
  
      const noteText = document.createElement('span');
      noteText.textContent = note.isEditing ? '' : note.text;
  
      const editButton = document.createElement('button');
      editButton.textContent = note.isEditing ? 'Save' : 'Edit';
      editButton.classList.add('bg-yellow-500', 'text-white', 'py-1', 'px-2', 'rounded-md', 'ml-2');
      editButton.onclick = () => editNote(index, note.text, email);
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('bg-red-500', 'text-white', 'py-1', 'px-2', 'rounded-md', 'ml-2');
      deleteButton.onclick = () => deleteNote(index, email);
  
      li.appendChild(noteText);
      li.appendChild(editButton);
      li.appendChild(deleteButton);
      notesList.appendChild(li);
    });
  }
  
  // Edit note
  function editNote(index, noteText, email) {
    const notes = JSON.parse(localStorage.getItem(`notes-${email}`) || '[]');
    const noteInput = document.getElementById('noteInput');
  
    // Check if the note is already in edit mode
    if (notes[index].isEditing) {
      // Update the note text with the input value
      notes[index].text = noteInput.value.trim();
      notes[index].isEditing = false;
      noteInput.value = ''; // Clear the input field
    } else {
      // Set the note to edit mode and populate the input field
      notes[index].isEditing = true;
      noteInput.value = noteText;
    }
  
    localStorage.setItem(`notes-${email}`, JSON.stringify(notes));
    displayNotes(email);
  }
  
  // Delete note
  function deleteNote(index, email) {
    const notes = JSON.parse(localStorage.getItem(`notes-${email}`) || '[]');
    notes.splice(index, 1);
    localStorage.setItem(`notes-${email}`, JSON.stringify(notes));
    displayNotes(email);
  }
  
  // Logout user
  function logout() {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    showLoginPage();
  }
  
  // Check user login on page load
  window.onload = function() {
    checkUserLogin();
  }