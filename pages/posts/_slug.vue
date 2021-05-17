<template>
  <article>
    <CreatedDate>{{ createdAt(post.sys.createdAt) }}</CreatedDate>
    <TagLinks :items="post.fields.tags" />
    <!-- eslint-disable-next-line -->
    <section v-html="$md.render(content())" />
  </article>
</template>

<script>
import { dateFormat, embedResponsiveFormat } from '~/utils/format'

export default {
  asyncData ({ $contentful, $config, params, error }) {
    return $contentful.getEntries({
      content_type: $config.contentfulMainTypeId,
      'fields.slug': params.slug
    }).then((entries) => {
      if (entries.total !== 1) {
        error({ statusCode: 404, message: 'Page not found' })
        return
      }
      return {
        post: entries.items[0]
      }
    })
  },
  head () {
    return {
      title: this.post.fields.title
    }
  },
  methods: {
    createdAt (value) {
      return dateFormat(value)
    },
    content () {
      return embedResponsiveFormat(this.post.fields.body)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables";

article ::v-deep {
  h1 {
    margin: 1rem 0;
    padding: 0.6rem 0;
  }

  h2 {
    border-bottom: 1px solid lightgray;
    margin: 1.5rem 0;
    padding: 0.6rem 0;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  iframe,
  .embed-responsive {
    margin-bottom: 3rem;
  }
}
</style>
