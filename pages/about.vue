<template>
  <div>
    <h1>About</h1>
    This is a application built on Nuxt.js + Contentful + Netlify.<br>
    This was built for demonstration purpose.<br>
    <br>
    For more information:
    <a href="https://github.com/jamband/nuxt-contentful-netlify-demo" rel="noopener" target="_blank">
      GitHub: jamband/nuxt-contentful-netlify-demo
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
