<template>
  <div class="container">
    <member-ship-flowing />
  </div>
</template>

<script>
export default {
  components: {
    memberShipFlowing: () => import('@/views/agentManagement/MembershipFlowing')
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
</style>

