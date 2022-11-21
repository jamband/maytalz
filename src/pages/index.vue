<script lang="ts" setup>
const { data: posts } = await useFetch("/api/posts");
</script>

<template>
  <div>
    <TheHead title="" description="" />
    <div
      v-for="post in posts?.items"
      :key="post.sys.id"
      class="mb-14 flex flex-col gap-y-3"
    >
      <PostLink :post="post" class="-mb-2" />
      <PostCreatedDate :date="post.sys.createdAt" />
      <PostTagLinks :links="post.fields.tags" />
    </div>
  </div>
</template>
