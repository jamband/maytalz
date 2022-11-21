<script lang="ts" setup>
import type { Entry } from "contentful";
import type { Post } from "~/types/post";

const props = defineProps<{
  post: Entry<Post>;
}>();
</script>

<template>
  <h2 class="group">
    <NuxtLink
      :to="`/posts/${props.post.fields.slug}`"
      class="peer text-gray-600 no-underline group-hover:text-orange-600 group-active:text-orange-600"
      >{{ post.fields.title
      }}<span
        class="ml-2 align-top text-[1.25rem] text-gray-400 group-hover:text-orange-600 group-active:text-orange-600"
        >→</span
      >
    </NuxtLink>
  </h2>
</template>
