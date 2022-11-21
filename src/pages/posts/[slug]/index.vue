<script lang="ts" setup>
const route = useRoute();
const { data: posts } = await useFetch(`/api/posts/${route.params.slug}`);
</script>

<template>
  <article class="flex flex-col gap-y-4">
    <TheHead
      :title="posts?.item.fields.title || ''"
      :description="posts?.item.fields.description || ''"
    />
    <PostTitle :title="posts?.item.fields.title || ''" class="mb-8" />
    <PostCreatedDate
      :date="posts?.item.sys.createdAt || ''"
      class="-mb-2 text-end"
    />
    <PostTagLinks
      :links="posts?.item.fields.tags"
      class="mb-8 flex justify-end"
    />
    <PostContent :html-content="posts?.htmlContent || ''" class="mb-16" />
    <SectionDivider class="mb-16" />
    <BackToHomeLink />
  </article>
</template>
