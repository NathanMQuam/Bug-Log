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
                <input type="email" class="form-control" id="newBugTitle" aria-describedby="emailHelp" placeholder="Enter email">
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
              <textArea type="password" class="form-control" id="newBugDescription" rows="3">
              </textArea>
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
export default {
  name: 'ReportBug',
  setup() {
    const user = computed(() => AppState.user)
    return {
      user,
      submitBug() {
        console.log('form submission')
      }
    }
  },
  components: {}
}
</script>
