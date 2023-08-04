<script lang="ts" setup>
const props = defineProps<{
  total: number;
}>();

const route = useRoute();
const appConfig = useAppConfig();

const currentPage = Number(route.params.page) || 1;
const lastPage = computed(() =>
  Math.ceil(props.total / appConfig.posts.perPage),
);
</script>

<template>
  <div aria-label="page information">{{ currentPage }}/{{ lastPage }}</div>
</template>
