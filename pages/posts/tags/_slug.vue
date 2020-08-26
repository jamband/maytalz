<template>
  <article>
    <section v-for="post in posts" :key="post.sys.id" class="mb-3">
      <CreatedDate>{{ createdAt(post.sys.createdAt) }}</CreatedDate>
      <TagLinks :items="post.fields.tags" />
      <PostLink :post="post" />
    </section>
  </article>
</template>

<script>
import { dateFormat } from '~/plugins/format'

export default {
  asyncData ({ $contentful, $config, params, error }) {
    return $contentful.getEntries({
      content_type: $config.contentfulTagTypeId,
      'fields.slug': params.slug
    }).then((entries) => {
      if (entries.total === 0) {
        error({ statusCode: 404, message: 'Page not found' })
        return
      }

      return $contentful.getEntries({
        content_type: $config.contentfulMainTypeId,
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
  methods: {
    createdAt (value) {
      return dateFormat(value)
    }
  },
  head () {
    return {
      title: `Tag: ${this.$route.params.slug}`
    }
  }
}
</script>
