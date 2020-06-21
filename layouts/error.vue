<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="text-danger">
      <fa icon="info-circle" /> {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    title () {
      const title = this.isNotFound
        ? 'Not Found'
        : 'An Error Occurred'

      return `${title} (#${this.error.statusCode}) - ${this.$app.name}`
    },
    message () {
      return this.isNotFound
        ? 'Page not found.'
        : 'An error occurred.'
    },
    isNotFound () {
      return this.error.statusCode === 404
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  border-bottom: 1px solid $gray-300;
  padding: .6rem 0;
  margin-bottom: 2rem;
}
</style>
