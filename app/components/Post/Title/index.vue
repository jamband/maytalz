<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <h1 :class="$style.container">{{ props.title }}</h1>
</template>

<style src="./styles.module.css" module />
