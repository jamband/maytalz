<script lang="ts" setup>
import type { Post } from "@/types/post";
import type { Entry } from "contentful";

const props = defineProps<{
  post: Entry<Post>;
}>();
</script>

<template>
  <h2>
    <NuxtLink
      :to="`/posts/${props.post.fields.slug}`"
      class="group text-gray-600 no-underline"
      ><span class="group-hover:text-orange-600 group-active:text-orange-600">{{
        post.fields.title
      }}</span
      ><span
        class="ml-2 align-top text-[1.25rem] text-gray-400 group-hover:text-orange-600 group-active:text-orange-600"
        >→</span
      >
    </NuxtLink>
  </h2>
</template>
