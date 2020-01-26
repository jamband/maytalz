<template>
  <article>
    <CreatedDate :date="$format.date(post.sys.createdAt)" />
    <TagLinks :items="post.fields.tags" />
    <!-- eslint-disable-next-line -->
    <section v-html="$md.render(post.fields.body)" />
  </article>
</template>

<script>
import CreatedDate from '~/components/CreatedDate'
import TagLinks from '~/components/TagLinks'

import contentful from '~/plugins/contentful'

export default {
  components: {
    CreatedDate,
    TagLinks
  },
  asyncData ({ env, params, error }) {
    return contentful.getEntries({
      content_type: env.CONTENTFUL_MAIN_TYPE_ID,
      'fields.slug': params.slug
    }).then((entries) => {
      if (entries.total !== 1) {
        error({ statusCode: 404 })
        return
      }
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

<style lang="scss" scoped>
article /deep/ {
  h1 {
    border-bottom: 1px solid $gray-300;
    padding: .6rem 0;
    margin-bottom: 2rem;
  }

  img,
  iframe {
    max-width: 100%;
    height: auto;
  }
}
</style>
