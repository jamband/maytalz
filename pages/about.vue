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
      <LinkExternal :href="app.repositoryUrl">GitHub - {{ app.repositoryName }}</LinkExternal>
    </section>
  </article>
</template>

<script>
import { APP_REPOSITORY_URL, APP_REPOSITORY_NAME } from '~/plugins/constants'

export default {
  data () {
    return {
      app: {
        repositoryUrl: APP_REPOSITORY_URL,
        repositoryName: APP_REPOSITORY_NAME
      }
    }
  },
  head () {
    return {
      title: 'About'
    }
  }
}
</script>
