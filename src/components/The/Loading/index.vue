<script lang="ts" setup>
const { afterEach, beforeEach } = useRouter();
const state = ref<"initial" | "start" | "complete">("initial");

beforeEach(() => {
  state.value = "start";
});

afterEach(() => {
  setTimeout(() => {
    state.value = "complete";
  }, 100);

  setTimeout(() => {
    state.value = "initial";
  }, 500);
});
</script>

<template>
  <div
    :class="[
      'fixed z-50 h-1 w-0 bg-orange-600',
      state === 'start' &&
        'w-[99%] bg-orange-600/60 transition-[width] duration-[10000ms] ease-[cubic-bezier(0.1,0.05,0,1)]',
      state === 'complete' &&
        'w-[100%] bg-orange-600/70 transition-[width_0.1s_ease-out]',
    ]"
    role="status"
  />
</template>
