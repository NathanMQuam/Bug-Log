<template>
  <div class="ReportBug">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#reportBugModal">
      Report Bug
    </button>

    <!-- Modal -->
    <div class="modal fade"
         id="reportBugModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="reportBugModalLabel"
         aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <form class="modal-content" @submit.prevent="submitBug">
          <div class="modal-header">
            <h5 class="modal-title" id="reportBugModalLabel">
              Report Bug
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <div>
              <div class="form-group d-inline-block w-50">
                <label for="newBugTitle">Bug Title</label>
                <input type="text" class="form-control" id="newBugTitle" placeholder="Title of Bug" v-model="newBug.title">
              </div>
              <div class="d-inline-block w-50 mb-auto">
                Reported By:
                <p>
                  {{ user.name }}
                </p>
              </div>
            </div>
            <div class="form-group">
              <label for="newBugDescription">Description</label>
              <textarea class="form-control" id="newBugDescription" rows="3" v-model="newBug.description">
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
import { computed } from 'vue'
import { AppState } from '../AppState.js'
import { bugsService } from '../services/BugsService.js'
import $ from 'jquery'

export default {
  name: 'ReportBug',
  setup() {
    const user = computed(() => AppState.user)
    const newBug = {}
    return {
      user,
      newBug,
      submitBug() {
        bugsService.createBug(newBug)
        $('#reportBugModal').modal('hide')
      }
    }
  },
  components: {}
}
</script>
