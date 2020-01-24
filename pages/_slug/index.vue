<template>
  <div>
    <span class="mr-2 text-muted small">{{ $format.date(post.sys.createdAt) }}</span>
    <n-link v-for="tag in post.fields.tags" :key="tag.sys.id" :to="{ name: 'tags-id', params: { id: tag.sys.id } }" class="mr-2 badge badge-light">
      {{ tag.fields.name }}
    </n-link>
    <!-- eslint-disable-next-line -->
    <article v-html="$md.render(post.fields.body)" />
  </div>
</template>

<script>
import contentful from '~/plugins/contentful'

export default {
  asyncData ({ env, params, error }) {
    return contentful.getEntries({
      content_type: env.CONTENTFUL_FOO_TYPE_ID,
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
