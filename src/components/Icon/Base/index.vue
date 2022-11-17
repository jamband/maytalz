<script lang="ts" setup>
import type { SVGAttributes } from "vue";

const props = defineProps<{
  fill: SVGAttributes["fill"];
  viewBox: SVGAttributes["viewBox"];
  strokeWidth?: SVGAttributes["stroke-width"];
  stroke?: SVGAttributes["stroke"];
}>();
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :fill="props.fill"
    :viewBox="props.viewBox"
    :stroke-width="props.strokeWidth"
    :stroke="props.stroke"
    class="inline-block"
  >
    <slot />
  </svg>
</template>
