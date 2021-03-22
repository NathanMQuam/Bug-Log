<template>
  <div class="BugPage w-100">
    <div class="container">
      <div class="row my-3">
        <div class="col-10">
          <h2>{{ bug.title }}</h2>
        </div>
        <div class="col-2 bg-danger text-light">
          <div class="d-flex justify-content-center align-items-center h-100 text-capitalize">
            {{ bug.closed }}
          </div>
        </div>
      </div>
      <div class="row my-3">
        <div class="col-10">
          Reported by: <h5>{{ bug.creator.name }}</h5>
        </div>
        <div class="col-2">
          Status: <span class="text-danger text-capitalize">{{ bug.closed }}</span>
        </div>
      </div>
      <div class="row p-3">
        <div class="col border border-dark">
          {{ bug.description }}
        </div>
      </div>
    </div>
    <div class="container mt-3">
      <div class="row">
        <div class="d-flex align-items-center">
          <h4>Notes</h4> <button class="btn btn-primary ml-3">
            Add
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-3">
          <h5>Name</h5>
        </div>
        <div class="col">
          <h5>Message</h5>
        </div>
        <div class="col-1">
          <h5>Delete</h5>
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
import Note from '../components/Note'
export default {
  name: 'BugPage',
  setup() {
    const route = useRoute()
    const bug = computed(() => AppState.activeBug)
    const notes = computed(() => AppState.notes)
    onMounted(() => {
      bugsService.getBugById(route.params.id)
    })
    return {
      bug,
      notes
    }
  },
  components: {
    Note
  }
}
</script>
