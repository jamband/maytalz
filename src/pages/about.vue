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
      <LinkExternal :href="appRepositoryUrl">GitHub - {{ appRepositoryName }}</LinkExternal>
    </section>
  </article>
</template>

<script>
import { APP_REPOSITORY_URL, APP_REPOSITORY_NAME } from '~/constants/app'

export default {
  data () {
    return {
      appRepositoryUrl: APP_REPOSITORY_URL,
      appRepositoryName: APP_REPOSITORY_NAME
    }
  },
  head () {
    return {
      title: 'About'
    }
  }
}
</script>
