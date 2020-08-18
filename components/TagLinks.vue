<template>
  <span>
    <n-link
      v-for="tag in items"
      :key="tag.sys.id"
      :to="{ name: 'posts-tags-slug', params: { slug: tag.fields.slug }}"
      class="tag-links mr-2"
    >
      {{ tag.fields.name }}
    </n-link>
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
.tag-links {
  padding: .15em .4em;
  font-size: .8em;
  border-radius: $border-radius;
  color: $gray-500;
  background-color: $gray-100;

  &:hover {
    color: $gray-700;
    background-color: $gray-200;
  }
}
</style>
