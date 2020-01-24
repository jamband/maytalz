<template>
  <article>
    <h1>Contact</h1>
    <section>
      Please to the message via
      <a href="https://twitter.com/livejam_db" rel="noopener" target="_blank">Twitter</a> or
      <a :href="`${$app.repository}/issues`" rel="noopener" target="_blank">GitHub</a> Issues.
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
