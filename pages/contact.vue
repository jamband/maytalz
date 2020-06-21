<template>
  <article>
    <h1>Contact</h1>
    <section>
      Please to the message via
      <LinkExternal href="https://twitter.com/livejam_db">Twitter</LinkExternal> or
      <LinkExternal :href="`${$app.repository}/issues`">GitHub</LinkExternal> Issues.
    </section>
    <section>
      Thank you.
    </section>
  </article>
</template>

<script>
export default {
  head () {
    return {
      title: `Contact - ${this.$app.name}`
    }
  }
}
</script>
