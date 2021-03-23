<template>
  <div class="Note row">
    <div class="col-3">
      <Author :user="note.creator" />
    </div>
    <div class="col">
      {{ note.body }}
    </div>
    <div v-if="user.email === note.creator.email" class="col-1" @click="deleteNote">
      <small>delete</small>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState.js'
import { Note } from '../models/Note.js'
import { notesService } from '../services/NotesService.js'
import Author from './Author'
export default {
  name: 'Note',
  props: {
    note: Note
  },
  setup(props) {
    const user = computed(() => AppState.user)
    return {
      user,
      deleteNote() {
        if (window.confirm('Are you sure you want to delete this note?')) {
          notesService.deleteNote(props.note)
        }
      }
    }
  },
  components: {
    Author
  }
}
</script>
