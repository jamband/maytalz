<template>
  <div>
    <Html lang="en" />
    <TheLoading />
    <TheHeader />
    <main class="container mx-auto pb-32 pt-28">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
