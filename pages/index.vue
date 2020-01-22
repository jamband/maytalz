<template>
  <div>
    <div v-for="post in posts" :key="post.fields.slug">
      <span class="mr-2 text-muted small">{{ $format.date(post.sys.createdAt) }}</span>
      <n-link v-for="tag in post.fields.tags" :key="tag.sys.id" :to="{ path: tag.fields.slug }" class="mr-2 badge badge-light">
        {{ tag.fields.name }}
      </n-link>
      <h2>
        <n-link :to="{ path: post.fields.slug }">
          {{ post.fields.title }}
        </n-link>
      </h2>
      <hr>
    </div>
  </div>
</template>

<script>
import contentful from '~/plugins/contentful'

export default {
  asyncData ({ env }) {
    return contentful.getEntries({
      content_type: env.CONTENTFUL_TYPE_ID,
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
