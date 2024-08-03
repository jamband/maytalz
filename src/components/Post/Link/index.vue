<script lang="ts" setup>
import type { Post } from "@/types/post";
import type { Entry } from "contentful";
import type { Serialize, Simplify } from "nitropack";

const props = defineProps<{
  post: Simplify<Serialize<Entry<Post>>>;
}>();
</script>

<template>
  <h2>
    <NuxtLink :to="`/posts/${props.post.fields.slug}`" :class="$style.container"
      ><span :class="$style.title">{{ post.fields.title }}</span
      ><span :class="$style.titleSymbol">→</span>
    </NuxtLink>
  </h2>
</template>

<style src="./styles.module.css" module />
