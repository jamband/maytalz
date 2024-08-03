<script lang="ts" setup>
const props = defineProps<{
  htmlContent: string;
}>();
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <section :class="$style.post" v-html="props.htmlContent" />
</template>

<style src="./styles.module.css" module />
