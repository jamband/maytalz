<template>
  <div>
    <article>
      <section v-for="post in posts" :key="post.sys.id" class="mb-3">
        <CreatedDate :date="$format.date(post.sys.createdAt)" />
        <TagLinks :items="post.fields.tags" />
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
import TagLinks from '~/components/TagLinks'

import contentful from '~/plugins/contentful'
import { POSTS_PER_PAGE } from '~/constants'

export default {
  components: {
    CreatedDate,
    PaginationMinimal,
    PostLink,
    TagLinks
  },
  asyncData ({ env }) {
    return contentful.getEntries({
      content_type: env.CONTENTFUL_MAIN_TYPE_ID,
      order: '-sys.createdAt',
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
      title: `${this.$app.name}`
    }
  }
}
</script>
