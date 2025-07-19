<script lang="ts" setup>
const route = useRoute();
const { data: posts } = await useFetch(`/api/posts/${route.params.slug}`);

if (!posts.value) {
  throw createError({ statusCode: 404 });
}
</script>

<template>
  <article :class="$style.container">
    <TheHead
      :title="posts?.item?.fields.title || ''"
      :description="posts?.item?.fields.description || ''"
    >
      <Meta
        v-if="posts?.openGraphImage"
        name="og:image"
        :content="`https:${posts?.openGraphImage}`"
      />
    </TheHead>
    <PostTitle :title="posts?.item?.fields.title || ''" />
    <div :class="$style.postInformation">
      <PostCreatedDate
        :date="posts?.item?.sys.createdAt || ''"
        :class="$style.postCreatedDate"
      />
      <PostTagLinks
        :links="posts?.item?.metadata.tags"
        :class="$style.postTagLinks"
      />
    </div>
    <PostContent :html-content="posts?.htmlContent || ''" />
    <SectionDivider />
    <BackToHomeLink />
  </article>
</template>

<style src="./styles.module.css" module />
