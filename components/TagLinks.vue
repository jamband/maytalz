<template>
  <span>
    <NLink
      v-for="tag in items"
      :key="tag.sys.id"
      :to="{ name: 'posts-tags-slug', params: { slug: tag.fields.slug }}"
      class="tag-links mr-2"
    >
      #{{ tag.fields.name }}
    </NLink>
  </span>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/variables";

.tag-links {
  border-radius: $border-radius;
  color: var(--bs-secondary);
  padding: 0.15rem 0.2rem;

  &:hover {
    color: $body-color;
  }
}
</style>
