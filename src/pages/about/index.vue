<script lang="ts" setup>
const appConfig = useAppConfig();
</script>

<template>
  <div>
    <TheHead title="About" description="" />
    <h1>About</h1>
    <p>{{ appConfig.description }}</p>
    <p class="mb-16">
      For more information:
      <NuxtLink href="https://github.com/jamband/maytalz" target="_blank"
        >GitHub: jamband/maytalz<IconArrowTopRightOnSquare
          class="ml-0.5 h-4 w-4 align-[-0.125em]"
      /></NuxtLink>
    </p>
    <SectionDivider class="mb-16" />
    <BackToHomeLink />
  </div>
</template>
