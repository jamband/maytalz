<template>
  <article>
    <TheHead title="Contact" description="" />
    <section>
      <h1>Contact</h1>
      <p>
        Please to the message via
        <NuxtLink
          href="https://twitter.com/livejam_db"
          :class="$style.link"
          target="_blank"
          >X<IconArrowTopRightOnSquare :class="$style.linkIcon"
        /></NuxtLink>
        or
        <NuxtLink
          href="https://github.com/jamband/maytalz/issues"
          :class="$style.link"
          target="_blank"
          >Github<IconArrowTopRightOnSquare :class="$style.linkIcon"
        /></NuxtLink>
        issues. Thank you.
      </p>
    </section>
    <SectionDivider :class="$style.sectionDivider" />
    <BackToHomeLink :class="$style.backToHomeLink" />
  </article>
</template>

<style src="./styles.module.css" module />
