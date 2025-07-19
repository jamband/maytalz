<template>
  <div>
    <Html lang="en" />
    <TheLoading />
    <TheHeader />
    <main :class="$style.main">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style src="./default.module.css" module />
