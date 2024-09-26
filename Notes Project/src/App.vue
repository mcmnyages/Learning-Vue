<script setup>
import { ref } from 'vue';

const showModal = ref(false);
const newNote = ref('');
const notes = ref([]);
const errorMessage = ref('');
const editMode = ref(false); // Track whether in edit mode
const editNoteId = ref(null); // Track which note is being edited
const showDeleteConfirmation = ref(false); // Toggle confirmation modal
const noteToDelete = ref(null); // Track which note is about to be deleted

function randomColor() {
  return 'hsla(' + (Math.random() * 360) + ', 70%, 50%, 1)';
}

// Add new note or update an existing note
const addOrEditNote = () => {
  if (newNote.value.length < 10) {
    return (errorMessage.value = 'Note must be 10 characters or more!');
  }

  if (editMode.value) {
    const note = notes.value.find((note) => note.id === editNoteId.value);
    note.text = newNote.value;
    editMode.value = false;
    editNoteId.value = null;
  } else {
    notes.value.push({
      id: Math.floor(Math.random() * 100000),
      text: newNote.value,
      date: new Date(),
      backgroundColor: randomColor(),
    });
  }

  showModal.value = false;
  newNote.value = '';
  errorMessage.value = '';
};

// Trigger edit mode for the selected note
const editNote = (note) => {
  newNote.value = note.text;
  editNoteId.value = note.id;
  editMode.value = true;
  showModal.value = true;
};

// Confirm deletion of a note
const confirmDeleteNote = (note) => {
  noteToDelete.value = note;
  showDeleteConfirmation.value = true;
};

// Delete a specific note
const deleteNote = () => {
  notes.value = notes.value.filter((note) => note.id !== noteToDelete.value.id);
  noteToDelete.value = null;
  showDeleteConfirmation.value = false;
};

// Clear all notes
const clearAllNotes = () => {
  if (confirm('Are you sure you want to delete all notes?')) {
    notes.value = [];
  }
};
</script>

<template>
  <main>
    <!-- Modal for adding/editing notes -->
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea name="note" id="note" cols="70" rows="10" v-model.trim="newNote"></textarea>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <button @click="addOrEditNote">{{ editMode ? 'Save Changes' : 'Add Note' }}</button>
        <button class="close" @click="showModal = false">Close</button>
      </div>
    </div>

    <!-- Modal for delete confirmation -->
    <div v-if="showDeleteConfirmation" class="overlay">
      <div class="modal">
        <p>Are you sure you want to delete this note?</p>
        <button @click="deleteNote">Yes, delete</button>
        <button @click="showDeleteConfirmation = false">Cancel</button>
      </div>
    </div>

    <div class="container">
      <header>
        <h1>Notes</h1>
        <div>
          <button @click="showModal = true; editMode = false">+</button>
          <button @click="clearAllNotes" id="deleteAll"></button>
        </div>
      </header>

      <div class="cards-container">
        <div
          :style="{ backgroundColor: note.backgroundColor }"
          class="card"
          v-for="note in notes"
          :key="note.id"
        >
          <p class="main-text">{{ note.text }}</p>
          <p class="date">{{ note.date.toLocaleDateString('en-US') }}</p>
          <div class="actions">
            <button @click="editNote(note)">Edit</button>
            <button @click="confirmDeleteNote(note)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background-color: rgba(18, 39, 32);
}
.modal {
  opacity: 1;
  position: relative;
  flex-direction: column;
  display: flex;
  height: 300px;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
}
.modal button {
  background-color: blueviolet;
  color: white;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
  font-size: 20px;
  border: none;
  padding: 10px 20px;
  margin-top: 15px;
}
.modal .close {
  margin-top: 10px;
  background-color: red;
}
.modal p {
  color: red;
}
main {
  height: 100vh;
  width: 100vw;
}
.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  margin-bottom: 25px;
  font-size: 75px;
  font-weight: bold;
}
button {
  font-size: 25px;
  border-radius: 100%;
  cursor: pointer;
  font-weight: 50px;
  height: 50px;
  width: 50px;
  border: none;
}
.card {
  height: 225px;
  width: 225px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(73, 94, 94);
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 15px;
}
.main-text {
  overflow-wrap: break-word;
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
}
.actions {
  display: flex;
  justify-content: space-between;
}
.date {
  font-weight: bold;
}

#deleteAll{
  margin-top: 30px;
  background-color: red;
}
</style>
