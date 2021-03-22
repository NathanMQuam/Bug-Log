<template>
  <div class="Note row">
    <div class="col-3">
      {{ note.creator.name }}
    </div>
    <div class="col">
      {{ note.body }}
    </div>
    <div class="col-1">
      <small>delete</small>
    </div>
  </div>
</template>

<script>
import { Note } from '../models/Note.js'
export default {
  name: 'Note',
  props: {
    note: Note
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
