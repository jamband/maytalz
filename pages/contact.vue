<template>
  <article>
    <h1>Contact</h1>
    <section>
      Please to the message via
      <LinkExternal href="https://twitter.com/livejam_db">Twitter</LinkExternal> or
      <LinkExternal :href="`${app.repositoryUrl}/issues`">GitHub</LinkExternal> Issues.
    </section>
    <section>
      Thank you.
    </section>
  </article>
</template>

<script>
import { APP_REPOSITORY_URL } from '~/plugins/constants'

export default {
  data () {
    return {
      app: {
        repositoryUrl: APP_REPOSITORY_URL
      }
    }
  },
  head () {
    return {
      title: 'Contact'
    }
  }
}
</script>
