<script lang="ts" setup>
const { data } = await usePostCollection();
</script>

<template>
  <div>
    <TheHead title="" description="" />
    <div
      v-for="post in data?.posts"
      :key="post.sys.id"
      class="mb-12 flex flex-col gap-y-4"
    >
      <PostLink :post="post" class="-mb-3" />
      <PostCreatedDate :date="post.sys.createdAt" />
      <PostTags :links="post.fields.tags" />
    </div>
  </div>
</template>
