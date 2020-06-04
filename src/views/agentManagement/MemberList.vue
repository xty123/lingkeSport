<template>
  <div class="container">
    <!-- 会员列表 -->
    <straight-push-users :is-show-return="false" />
  </div>
</template>

<script>
export default {
  components: {
    straightPushUsers: () =>
      import('@/views/agentManagement/components/StraightPushUsers')
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "~@/styles/common.scss";
</style>

