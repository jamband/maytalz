<template>
  <footer :class="$style.container">
    <nav :class="$style.navigation" aria-label="footer navigation">
      <div :class="$style.links">
        <TheFooterLink href="/about">About</TheFooterLink>
        <TheFooterLink href="/contact">Contact</TheFooterLink>
        <TheFooterLink href="https://github.com/jamband/maytalz" target="_blank"
          >GitHub</TheFooterLink
        >
      </div>
    </nav>
  </footer>
</template>

<style src="./styles.module.css" module />
