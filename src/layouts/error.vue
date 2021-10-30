<template>
  <div>
    <h1>#{{ error.statusCode }}</h1>
    {{ error.message }}
    <p class="text-center mt-5">
      <nuxt-link :to="{ name: 'index' }">Back to Home</nuxt-link>
    </p>
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
  head () {
    return {
      title: `(#${this.error.statusCode}) ${this.error.message}`
    }
  }
}
</script>
