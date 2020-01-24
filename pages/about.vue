<template>
  <div>
    <h1>About</h1>
    This is a application built on Nuxt.js + Contentful + Netlify.<br>
    This was built for demonstration purpose.<br>
    <br>
    For more information:
    <a :href="$app.repository" rel="noopener" target="_blank">
      GitHub - jamband/{{ $app.name.toLowerCase() }}
    </a>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: `About - ${this.$app.name}`
    }
  }
}
</script>

<style>
</style>
