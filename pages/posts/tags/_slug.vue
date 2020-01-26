<template>
  <article>
    <section v-for="post in posts" :key="post.sys.id" class="mb-3">
      <CreatedDate :date="$format.date(post.sys.createdAt)" />
      <TagLinks :items="post.fields.tags" />
      <PostLink :post="post" />
    </section>
  </article>
</template>

<script>
import CreatedDate from '~/components/CreatedDate'
import PostLink from '~/components/PostLink'
import TagLinks from '~/components/TagLinks'

import contentful from '~/plugins/contentful'

export default {
  components: {
    CreatedDate,
    PostLink,
    TagLinks
  },
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
      title: `${this.$app.name}`
    }
  }
}
</script>
