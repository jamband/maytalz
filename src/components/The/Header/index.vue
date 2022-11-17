<script lang="ts" setup>
const appConfig = useAppConfig();
</script>

<template>
  <header
    class="fixed z-10 flex w-full justify-center bg-gray-100 font-semibold shadow-sm shadow-gray-300"
  >
    <nav class="my-1" aria-label="header navigation">
      <NuxtLink
        href="/"
        class="m-1 inline-block rounded px-4 py-1 text-gray-600 no-underline hover:bg-gray-200 active:bg-gray-200"
        >{{ appConfig.name }}</NuxtLink
      >
    </nav>
  </header>
</template>
