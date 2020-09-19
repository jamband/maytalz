<template>
  <span>
    <NLink
      v-for="tag in items"
      :key="tag.sys.id"
      :to="{ name: 'posts-tags-slug', params: { slug: tag.fields.slug }}"
      class="tag-links mr-2"
    >
      {{ tag.fields.name }}
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
  background-color: $gray-100;
  border-radius: $border-radius;
  color: $gray-500;
  font-size: 0.8em;
  padding: 0.15em 0.4em;

  &:hover {
    background-color: $gray-200;
    color: $gray-700;
  }
}
</style>
