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
  asyncData ({ $config, $contentful, $app }) {
    return $contentful.getEntries({
      content_type: $config.contentfulMainTypeId,
      order: '-sys.createdAt',
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
