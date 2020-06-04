<template>
  <div class="container">
    <guess-flowing />
  </div>
</template>

<script>
export default {
  components: {
    guessFlowing: () => import('@/views/agentManagement/GuessFlowing')
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
</style>

