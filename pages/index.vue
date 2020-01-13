<template>
  <div>
    <ul>
      <li v-for="post in posts">
        <n-link :to="{ path: post.fields.slug }">
          {{ $format.date(post.sys.createdAt) }} -
          {{ post.fields.title }}
        </n-link>
      </li>
    </ul>
  </div>
</template>

<script>
import contentful from '~/plugins/contentful'

export default {
  asyncData ({ env }) {
    return contentful.getEntries({
      'content_type': env.CONTENTFUL_TYPE_ID,
      order: '-sys.createdAt'
    }).then((entries) => {
      return {
        posts: entries.items
      }
    })
  },
  head () {
    return {
      title: `${this.$app.name}`
    }
  }
}
</script>

<style>
</style>
