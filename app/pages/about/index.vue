<script lang="ts" setup>
const appConfig = useAppConfig();
</script>

<template>
  <div>
    <TheHead title="About" description="" />
    <h1>About</h1>
    <p>{{ appConfig.description }}</p>
    <p>
      For more information:
      <NuxtLink
        href="https://github.com/jamband/maytalz"
        :class="$style.link"
        target="_blank"
        >GitHub: jamband/maytalz<IconUpRightFromSquare :class="$style.linkIcon"
      /></NuxtLink>
    </p>
    <SectionDivider :class="$style.sectionDivider" />
    <BackToHomeLink :class="$style.backToHomeLink" />
  </div>
</template>

<style src="./styles.module.css" module />
