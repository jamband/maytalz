<script lang="ts" setup>
import type { Entry } from "contentful";
import type { Post } from "~/types/post";

const props = defineProps<{
  post: Entry<Post>;
}>();
</script>

<template>
  <h2>
    <NuxtLink :to="`/posts/${props.post.fields.slug}`" class="no-underline">{{
      post.fields.title
    }}</NuxtLink>
  </h2>
</template>
