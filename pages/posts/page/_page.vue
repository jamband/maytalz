<template>
  <div>
    <article>
      <section v-for="post in posts" :key="post.sys.id" class="mb-3">
        <CreatedDate>{{ $format.date(post.sys.createdAt) }}</CreatedDate>
        <TagLinks :items="post.fields.tags" />
        <PostLink :post="post" />
      </section>
    </article>
    <PaginationMinimal :total="total" :per-page="$app.posts.perPage" />
  </div>
</template>

<script>
export default {
  asyncData ({ $contentful, $config, $app, params, error }) {
    const page = Number(params.page)
    if (isNaN(page) || page < 1) {
      error({ statusCode: 404, message: 'Page not found' })
      return
    }
    return $contentful.getEntries({
      content_type: $config.contentfulMainTypeId,
      order: '-sys.createdAt',
      skip: (page - 1) * $app.posts.perPage,
      limit: $app.posts.perPage
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
