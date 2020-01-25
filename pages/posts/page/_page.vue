<template>
  <div>
    <article>
      <section v-for="post in posts" :key="post.sys.id" class="mb-3">
        <CreatedDate :date="$format.date(post.sys.createdAt)" />
        <TagItem :items="post.fields.tags" />
        <h2>
          <n-link :to="{ name: 'posts-slug', params: { slug: post.fields.slug } }">
            {{ post.fields.title }}
          </n-link>
        </h2>
      </section>
    </article>
    <PaginationMinimal :total="total" />
  </div>
</template>

<script>
import CreatedDate from '~/components/CreatedDate'
import PaginationMinimal from '~/components/PaginationMinimal'
import TagItem from '~/components/TagItem'

import contentful from '~/plugins/contentful'

export default {
  components: {
    CreatedDate,
    PaginationMinimal,
    TagItem
  },
  asyncData ({ env, params, error }) {
    const page = Number(params.page)
    if (isNaN(page) || page < 1) {
      error({ statusCode: 404 })
      return
    }
    return contentful.getEntries({
      content_type: env.CONTENTFUL_MAIN_TYPE_ID,
      order: '-sys.createdAt',
      skip: (page - 1) * 2,
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
