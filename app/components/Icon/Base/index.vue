<script lang="ts" setup>
const props = defineProps<{
  viewBox: `0 0 ${number} ${number}`;
}>();
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="$style.container"
    fill="currentColor"
    :viewBox="props.viewBox"
    role="img"
    :aria-hidden="true"
  >
    <slot />
  </svg>
</template>

<style src="./styles.module.css" module />
