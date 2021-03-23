<template>
  <div class="home flex-grow-1 container">
    <div class="row py-2 pt-4">
      <div class="col-6">
        <div class="d-flex justify-content-between">
          <h2>Current Bugs</h2>
          <ReportBug />
        </div>
      </div>
      <div class="col-6">
        <input class="mt-auto ml-auto mr-2" type="checkbox" name="hideClosed" v-model="state.hideClosedBugs">
        <label class="mt-auto" for="hideClosed"><small>Hide Closed Bugs?</small></label>
      </div>
    </div>
    <!-- Label Row -->
    <div class="row">
      <div class="col-12">
        <div class="container">
          <div class="row">
            <div class="col-4">
              Title
            </div>
            <div class="col-3">
              Reported By
            </div>
            <div class="col-2">
              Status
            </div>
            <div class="col-3">
              Last Modified
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bug Rows -->
    <div v-for="bug in state.bugs" :key="bug.id">
      <Bug class="row p-1" :bug="bug" v-if="!state.hideClosedBugs && bug.closed || !bug.closed" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { bugsService } from '../services/BugsService.js'
import Bug from '../components/Bug'
import ReportBug from '../components/ReportBug'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    onMounted(() => {
      bugsService.getAllBugs()
      state.hideClosedBugs = false
    })
    const state = reactive({
      bugs: computed(() => AppState.bugs),
      hideClosedBugs: Boolean
    })
    return {
      state,
      toggleHideBugs() {
        state.hideClosedBugs = !state.hideClosedBugs
      }
    }
  },
  components: {
    Bug,
    ReportBug
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
