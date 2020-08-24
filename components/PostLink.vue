<template>
  <h2>
    <NLink :to="{ name: 'posts-slug', params: { slug: post.fields.slug } }">
      {{ post.fields.title }}
    </NLink>
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
