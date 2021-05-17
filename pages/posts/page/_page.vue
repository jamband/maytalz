<template>
  <div>
    <article>
      <section v-for="post in posts" :key="post.sys.id" class="mb-4">
        <CreatedDate>{{ createdAt(post.sys.createdAt) }}</CreatedDate>
        <TagLinks :items="post.fields.tags" />
        <PostLink :post="post" />
      </section>
    </article>
    <PaginationMinimal :total="total" :per-page="postsPerPage" />
  </div>
</template>

<script>
import { APP_NAME } from '~/constants/app'
import { POSTS_PER_PAGE } from '~/constants/post'
import { dateFormat } from '~/utils/format'

export default {
  asyncData ({ $contentful, $config, params }) {
    const page = Number(params.page) || 1

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
  data () {
    return {
      postsPerPage: POSTS_PER_PAGE
    }
  },
  head () {
    return {
      title: APP_NAME,
      titleTemplate: ''
    }
  },
  methods: {
    createdAt (value) {
      return dateFormat(value)
    }
  }
}
</script>
