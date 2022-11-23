<script lang="ts" setup>
const route = useRoute();
const appConfig = useAppConfig();

const { data: posts } = await useFetch(`/api/posts/page/${route.params.page}`, {
  query: { perPage: appConfig.posts.perPage },
});
</script>

<template>
  <div>
    <TheHead title="" description="" />
    <h1 class="text-center">Posts</h1>
    <AppPaginationInformation
      :total="posts?.total || 0"
      class="mb-12 text-center font-mono"
    />
    <section class="mb-20">
      <div
        v-for="post in posts?.items"
        :key="post.sys.id"
        class="mb-14 flex flex-col gap-y-3"
      >
        <PostLink :post="post" class="-mb-2" />
        <PostCreatedDate :date="post.sys.createdAt" />
        <PostTagLinks :links="post.fields.tags" />
      </div>
    </section>
    <AppPagination :total="posts?.total || 0" />
  </div>
</template>
