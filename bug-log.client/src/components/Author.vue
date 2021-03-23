<template>
  <div class="Author mh-100 mw-100">
    <img :src="user.picture" class="img-fluid img-thumbnail rounded-circle" style="max-width: 5vw !important;">
    {{ user.name }}
  </div>
</template>

<script>
export default {
  name: 'Author',
  props: {
    user: Object
  },
  setup() {
    return {}
  },
  components: {}
}
</script>
