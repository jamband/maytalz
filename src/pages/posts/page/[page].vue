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
    <h1 :class="$style.title">Posts</h1>
    <AppPaginationInformation
      :total="posts?.total || 0"
      :class="$style.paginationInformation"
    />
    <section :class="$style.main">
      <div
        v-for="post in posts?.items"
        :key="post.sys.id"
        :class="$style.posts"
      >
        <PostLink :post="post" />
        <PostCreatedDate :date="post.sys.createdAt" />
        <PostTagLinks
          :links="post.metadata.tags"
          :class="$style.postTagLinks"
        />
      </div>
    </section>
    <AppPagination :total="posts?.total || 0" :class="$style.pagination" />
  </div>
</template>

<style src="./styles.module.css" module />
