<script lang="ts" setup>
type Error = Ref<{
  message: string;
  statusCode: number;
}>;

const error = useError() as Error;

const isNotFound = Number(error.value.statusCode || 500) === 404;
const title = isNotFound ? "Not Found" : "An Error Occurred";
const message = isNotFound ? "Page not found." : error.value?.message;
</script>

<template>
  <div>
    <NuxtLayout>
      <TheHead :title="title" description="" />
      <h1>{{ title }}</h1>
      <p class="mb-16">{{ message }}</p>
      <SectionDivider class="mb-16" />
      <BackToHomeLink />
    </NuxtLayout>
  </div>
</template>
