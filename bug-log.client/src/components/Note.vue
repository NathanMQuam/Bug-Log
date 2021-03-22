<template>
  <div class="Note row">
    <div class="col-3">
      {{ note.creator.name }}
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
        notesService.deleteNote(props.note)
      }
    }
  },
  components: {}
}
</script>
