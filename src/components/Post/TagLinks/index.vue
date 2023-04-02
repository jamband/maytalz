<script lang="ts" setup>
import type { Post } from "@/types/post";
import type { Serialize, Simplify } from "nitropack";

const props = defineProps<{
  links: Simplify<Serialize<Post["tags"]>> | undefined;
}>();
</script>

<template>
  <ul class="flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs font-light">
    <li v-for="link in props.links" :key="link.sys.id">
      <NuxtLink
        :to="`/tags/${link.fields.slug}`"
        class="rounded bg-gray-500 px-3 py-1 text-gray-100 no-underline hover:bg-gray-400 hover:text-gray-100"
        >{{ link.fields.name }}</NuxtLink
      >
    </li>
  </ul>
</template>
