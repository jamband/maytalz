<script lang="ts" setup>
const route = useRoute();
const { data: posts } = await useFetch(`/api/tags/${route.params.slug}`);
</script>

<template>
  <article>
    <TheHead :title="`tags: ${route.params.slug}`" description="" />
    <h1 class="mb-12 text-center">tag: {{ route.params.slug }}</h1>
    <section
      v-for="post in posts?.items"
      :key="post.sys.id"
      class="mb-16 flex flex-col gap-y-4"
    >
      <PostLink :post="post" class="-mb-2" />
      <PostCreatedDate :date="post.sys.createdAt" />
      <PostTags :links="post.fields.tags" />
    </section>
    <SectionDivider class="mb-16" />
    <BackToHomeLink />
  </article>
</template>
