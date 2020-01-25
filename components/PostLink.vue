<template>
  <h2>
    <n-link :to="{ name: 'posts-slug', params: { slug: post.fields.slug } }">
      {{ post.fields.title }}
    </n-link>
  </h2>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
