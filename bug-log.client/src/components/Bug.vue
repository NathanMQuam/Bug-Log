<template>
  <router-link class="Bug" :to="{name: 'BugPage', params: {id: bug.id}}">
    <div class="col-4">
      {{ bug.title }}
    </div>
    <div class="col-3">
      {{ bug.creator.name }}
    </div>
    <div class="col-2">
      <span :class="statusStyle">{{ bug.closed }}</span>
    </div>
    <div class="col-3">
      {{ bug.lastModified }}
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Bug',
  props: {
    bug: Object
  },
  setup(props) {
    const statusStyle = props.bug.closed ? 'text-success' : 'text-danger'
    console.log(statusStyle)
    return {
      statusStyle
    }
  },
  components: {}
}
</script>

<style scoped>
  router-link {
    /*  */
  }
</style>
