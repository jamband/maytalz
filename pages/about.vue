<template>
  <article>
    <h1>About</h1>
    <section>
      This is a application built on
      <LinkExternal href="https://nuxtjs.org/">Nuxt.js</LinkExternal> +
      <LinkExternal href="https://www.contentful.com/">Contentful</LinkExternal> +
      <LinkExternal href="https://www.netlify.com/">Netlify</LinkExternal>.
    </section>
    <section>
      For more information:
      <LinkExternal :href="$app.repository">GitHub - jamband/{{ $app.name.toLowerCase() }}</LinkExternal>
    </section>
  </article>
</template>

<script>
export default {
  head () {
    return {
      title: 'About'
    }
  }
}
</script>
