<template>
  <div>
    <div v-for="post in posts" :key="post.sys.id">
      <span class="mr-2 text-muted small">{{ $format.date(post.sys.createdAt) }}</span>
      <n-link v-for="tag in post.fields.tags" :key="tag.sys.id" :to="{ name: 'tags-id', params: { id: tag.sys.id } }" class="mr-2 badge badge-light">
        {{ tag.fields.name }}
      </n-link>
      <h2>
        <n-link :to="{ path: post.fields.slug }">
          {{ post.fields.title }}
        </n-link>
      </h2>
      <hr>
    </div>
  </div>
</template>

<script>
import contentful from '~/plugins/contentful'

export default {
  asyncData ({ env, params }) {
    return contentful.getEntries({
      content_type: env.CONTENTFUL_FOO_TYPE_ID,
      order: '-sys.createdAt',
      'fields.tags.sys.id': params.id
    }).then((entries) => {
      return {
        posts: entries.items
      }
    })
  }
}
</script>
