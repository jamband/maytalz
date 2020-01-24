<template>
  <article>
    <h1>About</h1>
    <section>
      This is a application built on
      <a href="https://nuxtjs.org/" rel="noopener" target="_blank">Nuxt.js</a> +
      <a href="https://www.contentful.com/" rel="noopener" target="_blank">Contentful</a> +
      <a href="https://www.netlify.com/" rel="noopener" target="_blank">Netlify</a>.
    </section>
    <section>
      For more information:
      <a :href="$app.repository" rel="noopener" target="_blank">
        GitHub - jamband/{{ $app.name.toLowerCase() }}
      </a>
    </section>
  </article>
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
