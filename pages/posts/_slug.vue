<template>
  <article>
    <CreatedDate>{{ $format.date(post.sys.createdAt) }}</CreatedDate>
    <TagLinks :items="post.fields.tags" />
    <!-- eslint-disable-next-line -->
    <section v-html="$md.render(content())" />
  </article>
</template>

<script>
import contentful from '~/plugins/contentful'

export default {
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
  methods: {
    content () {
      return this.$format.embedResponsive(this.post.fields.body)
    }
  },
  head () {
    return {
      title: this.post.fields.title
    }
  }
}
</script>

<style lang="scss" scoped>
article ::v-deep {
  h1 {
    border-bottom: 1px solid $gray-300;
    padding: .6rem 0;
    margin-bottom: 2rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  iframe,
  .embed-responsive {
    margin-bottom: 3rem;
  }
}
</style>
