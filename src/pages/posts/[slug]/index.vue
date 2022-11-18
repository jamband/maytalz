<script lang="ts" setup>
const { data: post } = await usePost();
const htmlContent = await markdownToHtml(post.value?.fields.body || "");
</script>

<template>
  <article class="flex flex-col gap-y-4">
    <TheHead :title="post?.fields.title || ''" description="" />
    <PostTitle :title="post?.fields.title || ''" class="mb-8" />
    <PostCreatedDate :date="post?.sys.createdAt || ''" class="text-end" />
    <PostTags :links="post?.fields.tags" class="mb-8 flex justify-end" />
    <!-- eslint-disable-next-line vue/no-v-html -->
    <section class="post mb-16" v-html="htmlContent" />
    <SectionDivider class="mb-10" />
    <BackToHomeLink />
  </article>
</template>
