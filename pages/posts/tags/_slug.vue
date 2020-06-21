<template>
  <article>
    <section v-for="post in posts" :key="post.sys.id" class="mb-3">
      <CreatedDate>{{ $format.date(post.sys.createdAt) }}</CreatedDate>
      <TagLinks :items="post.fields.tags" />
      <PostLink :post="post" />
    </section>
  </article>
</template>

<script>
import contentful from '~/plugins/contentful'

export default {
  asyncData ({ env, params, error }) {
    return contentful.getEntries({
      content_type: env.CONTENTFUL_TAG_TYPE_ID,
      'fields.slug': params.slug
    }).then((entries) => {
      if (entries.total === 0) {
        error({ statusCode: 404 })
        return
      }

      return contentful.getEntries({
        content_type: env.CONTENTFUL_MAIN_TYPE_ID,
        order: '-sys.createdAt',
        'fields.tags.sys.id': entries.items[0].sys.id
      }).then((entries) => {
        if (entries.total === 0) {
          error({ statusCode: 404 })
          return
        }
        return {
          posts: entries.items
        }
      })
    })
  },
  head () {
    return {
      title: `Tag: ${this.$route.params.slug}`
    }
  }
}
</script>
