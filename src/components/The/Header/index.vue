<script lang="ts" setup>
const appConfig = useAppConfig();
</script>

<template>
  <header :class="$style.container">
    <nav :class="$style.navigation" aria-label="header navigation">
      <NuxtLink href="/" :class="$style.link">{{ appConfig.name }}</NuxtLink>
    </nav>
  </header>
</template>

<style src="./styles.module.css" module />
