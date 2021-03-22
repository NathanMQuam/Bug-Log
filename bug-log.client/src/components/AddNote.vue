<template>
  <div class="AddNote">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#addNoteModal">
      Add Note
    </button>

    <!-- Modal -->
    <div class="modal fade"
         id="addNoteModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="addNoteModalLabel"
         aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <form class="modal-content" @submit.prevent="addNote">
          <div class="modal-header">
            <h5 class="modal-title" id="addNoteModalLabel">
              New Note
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <div>
              <div class="d-inline-block">
                Reported By:
                <p>
                  {{ state.user.name }}
                </p>
              </div>
            </div>
            <div class="form-group">
              <label for="newBugDescription">Description</label>
              <textarea class="form-control" id="newBugDescription" rows="3" v-model="state.newNote.body">
              </textarea>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { notesService } from '../services/NotesService.js'
import { Note } from '../models/Note.js'
import { AppState } from '../AppState.js'
export default {
  name: 'AddNote',
  props: {
    bug: String
  },
  setup(props) {
    const state = reactive({
      newNote: new Note({ bug: props.bug }),
      user: computed(() => AppState.user)
    })
    return {
      state,
      addNote() {
        console.log(state.newNote)
        notesService.createNote(new Note(state.newNote))
      }
    }
  },
  components: {}
}
</script>
