<template>
  <div>
    <article>
      <section v-for="post in posts" :key="post.sys.id" class="mb-3">
        <CreatedDate :date="$format.date(post.sys.createdAt)" />
        <TagItem :items="post.fields.tags" />
        <PostLink :post="post" />
      </section>
    </article>
    <PaginationMinimal :total="total" />
  </div>
</template>

<script>
import CreatedDate from '~/components/CreatedDate'
import PaginationMinimal from '~/components/PaginationMinimal'
import PostLink from '~/components/PostLink'
import TagItem from '~/components/TagItem'

import contentful from '~/plugins/contentful'

export default {
  components: {
    CreatedDate,
    PaginationMinimal,
    PostLink,
    TagItem
  },
  asyncData ({ env }) {
    return contentful.getEntries({
      content_type: env.CONTENTFUL_MAIN_TYPE_ID,
      order: '-sys.createdAt',
      limit: 2
    }).then((entries) => {
      return {
        posts: entries.items,
        total: entries.total
      }
    })
  },
  head () {
    return {
      title: `${this.$app.name}`
    }
  }
}
</script>

<style>
</style>
