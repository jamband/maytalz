<template>
  <div>
    created: {{ $format.date(post.sys.createdAt) }}
    <div v-html="$md.render(post.fields.body)" />
  </div>
</template>

<script>
import contentful from '~/plugins/contentful'

export default {
  asyncData ({ env, params }) {
    return contentful.getEntries({
      'content_type': env.CONTENTFUL_TYPE_ID,
      'fields.slug': params.slug
    }).then((entries) => {
      return {
        post: entries.items[0]
      }
    })
  },
  head () {
    return {
      title: `${this.post.fields.title} - ${this.$app.name}`
    }
  }
}
</script>

<style>
</style>
