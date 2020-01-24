<template>
  <div>
    <h1>Contact</h1>
    Please to the message via
    <a href="https://twitter.com/livejam_db" rel="noopener" target="_blank">Twitter</a> or
    <a :href="`${$app.repository}/issue`" rel="noopener" target="_blank">GitHub</a> Issues.
    <br>
    Thank you.
  </div>
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
