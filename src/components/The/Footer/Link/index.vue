<script lang="ts" setup>
const props = defineProps<{
  href: string;
  target?: "_blank";
}>();
</script>

<template>
  <NuxtLink
    :href="props.href"
    class="rounded px-4 py-2 text-gray-500 no-underline hover:bg-gray-200 active:bg-gray-200"
    :target="props.target"
    ><slot
  /></NuxtLink>
</template>
