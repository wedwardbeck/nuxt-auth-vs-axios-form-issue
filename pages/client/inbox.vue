<template>
  <div>
    <div class="title">
      Inbox
    </div>
    <hr class="grey-dark">
    <div>
      <coreGrid />
    </div>
  </div>
</template>

<script>
import coreGrid from "@/components/CoreGrid"

export default {
  auth: false,
  components: {
    coreGrid
  }
}
</script>

<style lang="scss" scoped>
</style>
