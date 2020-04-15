<template>
  <div>
    <footer class="footer container has-text-left">
      <span class="level-item">
        <b-icon
          pack="far"
          icon="copyright"
          size="is-small"
        />
        &nbsp; 2002 - {{ currentYear | FormatISODate('yyyy') }} IQ BackOffice, Inc.
      </span>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    currentYear() {
      const currentYear = new Date()
      return currentYear
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
