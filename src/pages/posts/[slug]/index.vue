<script lang="ts" setup>
const route = useRoute();
const { data: posts } = await useFetch(`/api/posts/${route.params.slug}`);
</script>

<template>
  <article class="flex flex-col gap-y-4">
    <TheHead :title="posts?.item.fields.title || ''" description="" />
    <PostTitle :title="posts?.item.fields.title || ''" class="mb-8" />
    <PostCreatedDate :date="posts?.item.sys.createdAt || ''" class="text-end" />
    <PostTags :links="posts?.item.fields.tags" class="mb-8 flex justify-end" />
    <!-- eslint-disable-next-line vue/no-v-html -->
    <section class="post mb-16" v-html="posts?.htmlContent" />
    <SectionDivider class="mb-16" />
    <BackToHomeLink />
  </article>
</template>
