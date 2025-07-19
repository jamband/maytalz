<script lang="ts" setup>
const props = defineProps<{
  date: string;
}>();

const createdAt = computed(() =>
  new Date(props.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }),
);
</script>

<template>
  <div :class="$style.container">{{ createdAt }}</div>
</template>

<style src="./styles.module.css" module />
