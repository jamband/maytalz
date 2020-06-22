<template>
  <div>
    <article>
      <section v-for="post in posts" :key="post.sys.id" class="mb-3">
        <CreatedDate>{{ $format.date(post.sys.createdAt) }}</CreatedDate>
        <TagLinks :items="post.fields.tags" />
        <PostLink :post="post" />
      </section>
    </article>
    <PaginationMinimal :total="total" />
  </div>
</template>

<script>
import { POSTS_PER_PAGE } from '~/constants'

export default {
  asyncData ({ $contentful, $config, params, error }) {
    const page = Number(params.page)
    if (isNaN(page) || page < 1) {
      error({ statusCode: 404 })
      return
    }
    return $contentful.getEntries({
      content_type: $config.contentfulMainTypeId,
      order: '-sys.createdAt',
      skip: (page - 1) * POSTS_PER_PAGE,
      limit: POSTS_PER_PAGE
    }).then((entries) => {
      return {
        posts: entries.items,
        total: entries.total
      }
    })
  },
  head () {
    return {
      title: '',
      titleTemplate: this.$app.name
    }
  }
}
</script>
