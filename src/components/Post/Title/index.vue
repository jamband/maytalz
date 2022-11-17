<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <h1 class="text-center">{{ props.title }}</h1>
</template>
