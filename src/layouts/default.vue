<script lang="ts" setup>
const appConfig = useAppConfig();
</script>

<template>
  <div>
    <NuxtLoadingIndicator :color="appConfig.colors.primary" />
    <TheHeader />
    <main class="container mx-auto pb-32 pt-28">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
