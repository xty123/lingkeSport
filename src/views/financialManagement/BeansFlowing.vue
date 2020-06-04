<template>
  <div class="container">
    <beans-flowing />
  </div>
</template>

<script>
export default {
  components: {
    beansFlowing: () => import('@/views/agentManagement/BeansFlowing')
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
</style>

