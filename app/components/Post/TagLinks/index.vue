<script lang="ts" setup>
import type { Metadata } from "contentful";
import type { Serialize, Simplify } from "nitropack";

const props = defineProps<{
  links: Simplify<Serialize<Metadata["tags"]>> | undefined;
}>();
</script>

<template>
  <ul :class="$style.container">
    <li v-for="link in props.links" :key="link.sys.id">
      <NuxtLink :to="`/tags/${link.sys.id}`" :class="$style.link">{{
        link.sys.id
      }}</NuxtLink>
    </li>
  </ul>
</template>

<style src="./styles.module.css" module />
