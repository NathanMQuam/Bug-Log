<template>
  <router-link class="Bug" :to="{name: 'BugPage', params: {id: bug.id}}">
    <div class="col-4 d-flex justify-content-center align-content-center h-100">
      {{ bug.title }}
    </div>
    <div class="col-3">
      <Author :user="bug.creator" />
    </div>
    <div class="col-2">
      <span :class="statusStyle">{{ bug.closed }}</span>
    </div>
    <div class="col-3">
      {{ lastModified }}
    </div>
  </router-link>
</template>

<script>
import Author from './Author'

export default {
  name: 'Bug',
  props: {
    bug: Object
  },
  setup(props) {
    const statusStyle = props.bug.closed ? 'text-success' : 'text-danger'
    const lastModified = props.bug.lastModified.split('T')[0]
    return {
      statusStyle,
      lastModified
    }
  },
  components: {
    Author
  }
}
</script>
