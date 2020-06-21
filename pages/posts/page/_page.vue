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
import contentful from '~/plugins/contentful'
import { POSTS_PER_PAGE } from '~/constants'

export default {
  asyncData ({ env, params, error }) {
    const page = Number(params.page)
    if (isNaN(page) || page < 1) {
      error({ statusCode: 404 })
      return
    }
    return contentful.getEntries({
      content_type: env.CONTENTFUL_MAIN_TYPE_ID,
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
