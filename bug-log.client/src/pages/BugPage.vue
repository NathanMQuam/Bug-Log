<template>
  <div class="BugPage w-100" v-if="bug.creator">
    <div class="container">
      <div class="row my-3">
        <div class="col-10 d-flex">
          <h2>{{ bug.title }}</h2>
          <div v-if="!bug.closed">
            <EditBug v-if="user.email === bug.creator.email" :bug="bug" />
          </div>
        </div>
        <div class="col-2">
          <div v-if="!bug.closed">
            <button @click="closeBug" class="btn btn-danger" type="button">
              Close Bug?
            </button>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-10">
          Reported by: <h5>{{ bug.creator.name }}</h5>
        </div>
        <div class="col-2">
          Status: <span :class="bug.closed ? 'text-success' : 'text-danger' ">{{ bug.closed ? 'Closed' : 'Open' }}</span>
        </div>
      </div>
      <div class="row p-3">
        <div class="col border border-dark rounded p-2">
          {{ bug.description }}
        </div>
      </div>
    </div>
    <div class="container mt-3">
      <div class="row">
        <div class="d-flex align-items-center">
          <h4>Notes</h4>
          <AddNote :bug="bug.id" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-3">
          <h5>Name</h5>
        </div>
        <div class="col text-left">
          <h5>Message</h5>
        </div>
      </div>
      <Note v-for="note in notes" :key="note.id" :note="note" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState.js'
import { bugsService } from '../services/BugsService.js'
import { notesService } from '../services/NotesService.js'
import Note from '../components/Note'
import EditBug from '../components/EditBug'
import AddNote from '../components/AddNote'

export default {
  name: 'BugPage',
  setup() {
    const route = useRoute()
    const bug = computed(() => AppState.activeBug)
    const notes = computed(() => AppState.notes)
    const user = computed(() => AppState.user)
    onMounted(() => {
      bugsService.getBugById(route.params.id)
      notesService.getNotesByBugId(route.params.id)
    })
    return {
      bug,
      notes,
      user,
      closeBug() {
        bugsService.closeBug(bug.value.id)
      }
    }
  },
  components: {
    Note,
    EditBug,
    AddNote
  }
}
</script>
