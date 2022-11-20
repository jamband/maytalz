<script lang="ts" setup>
import type { Post } from "~/types/post";

const props = defineProps<{
  links: Post["tags"];
}>();
</script>

<template>
  <ul class="flex gap-3 text-sm font-light">
    <li v-for="link in props.links" :key="link.sys.id">
      <NuxtLink
        :to="`/tags/${link.fields.slug}`"
        class="rounded bg-gray-200 py-1 px-3 text-gray-500 no-underline hover:bg-gray-300 hover:text-gray-600"
        >{{ link.fields.name }}</NuxtLink
      >
    </li>
  </ul>
</template>
