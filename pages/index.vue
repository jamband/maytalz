<template>
  <article>
    <section v-for="post in posts" :key="post.sys.id" class="mb-3">
      <CreatedDate :date="$format.date(post.sys.createdAt)" />
      <TagItem :items="post.fields.tags" />
      <h2>
        <n-link :to="{ name: 'posts-slug', params: { slug: post.fields.slug } }">
          {{ post.fields.title }}
        </n-link>
      </h2>
    </section>
  </article>
</template>

<script>
import CreatedDate from '~/components/CreatedDate'
import TagItem from '~/components/TagItem'

import contentful from '~/plugins/contentful'

export default {
  components: {
    CreatedDate,
    TagItem
  },
  asyncData ({ env }) {
    return contentful.getEntries({
      content_type: env.CONTENTFUL_MAIN_TYPE_ID,
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
