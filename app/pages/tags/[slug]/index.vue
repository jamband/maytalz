<script lang="ts" setup>
const route = useRoute();
const { data: posts } = await useFetch(`/api/tags/${route.params.slug}`);
</script>

<template>
  <article>
    <TheHead :title="`tags: ${route.params.slug}`" description="" />
    <h1 :class="$style.title">
      <span :class="$style.titleSymbol">#</span>
      <span>{{ route.params.slug }}</span>
    </h1>
    <section :class="$style.main">
      <div
        v-for="post in posts?.items"
        :key="post.sys.id"
        :class="$style.posts"
      >
        <PostLink :post="post" />
        <PostCreatedDate :date="post.sys.createdAt" />
        <PostTagLinks :links="post.metadata.tags" />
      </div>
      <SectionDivider />
      <BackToHomeLink />
    </section>
  </article>
</template>

<style src="./styles.module.css" module />
