<template>
  <div class="Bug">
    <div class="col-4">
      {{ bug.title }}
    </div>
    <div class="col-3">
      {{ bug.creator.name }}
    </div>
    <div class="col-2">
      {{ bug.closed }}
    </div>
    <div class="col-3">
      {{ bug.lastModified }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bug',
  props: {
    bug: Object
  },
  setup() {
    return {}
  },
  components: {}
}
</script>
