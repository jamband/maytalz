<template>
  <footer
    class="fixed bottom-0 w-full bg-gray-100 font-semibold shadow-[0_-1px_2px] shadow-gray-300"
  >
    <nav
      class="container mx-auto my-2 text-sm text-gray-300"
      aria-label="footer navigation"
    >
      <div class="flex flex-row justify-center gap-2 md:gap-10">
        <TheFooterLink href="/about">About</TheFooterLink>
        <TheFooterLink href="/contact">Contact</TheFooterLink>
        <TheFooterLink href="https://github.com/jamband/maytalz" target="_blank"
          >GitHub</TheFooterLink
        >
      </div>
    </nav>
  </footer>
</template>
