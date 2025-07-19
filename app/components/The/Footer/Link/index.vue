<script lang="ts" setup>
const props = defineProps<{
  href: string;
  target?: "_blank";
}>();
</script>

<template>
  <NuxtLink :href="props.href" :class="$style.container" :target="props.target"
    ><slot
  /></NuxtLink>
</template>

<style src="./styles.module.css" module />
