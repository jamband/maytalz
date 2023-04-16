<script lang="ts" setup>
import type { Metadata } from "contentful";
import type { Serialize, Simplify } from "nitropack";

const props = defineProps<{
  links: Simplify<Serialize<Metadata["tags"]>> | undefined;
}>();
</script>

<template>
  <ul class="flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs font-light">
    <li v-for="link in props.links" :key="link.sys.id">
      <NuxtLink
        :to="`/tags/${link.sys.id}`"
        class="rounded bg-gray-500 px-3 py-1 text-gray-100 no-underline hover:bg-gray-400 hover:text-gray-100"
        >{{ link.sys.id }}</NuxtLink
      >
    </li>
  </ul>
</template>
