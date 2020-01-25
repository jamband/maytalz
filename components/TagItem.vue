<template>
  <div class="d-inline-block">
    <n-link v-for="tag in items" :key="tag.sys.id" :to="{ name: 'posts-tags-slug', params: { slug: tag.fields.slug }}" class="mr-2">
      {{ tag.fields.name }}
    </n-link>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  padding: .15em .4em;
  font-size: .8em;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: $border-radius;
  color: $gray-500;
  background-color: $gray-100;

  &:hover {
    color: $gray-700;
    background-color: $gray-200;
  }
}
</style>
