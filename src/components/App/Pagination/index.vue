<script lang="ts" setup>
import type { Pagination } from "@/types/pagination";

const props = defineProps<{
  total: number;
}>();

const route = useRoute();
const appConfig = useAppConfig();

const currentPage = computed(() => Number(`${route.params.page || 1}`));
const lastPage = computed(() =>
  Math.ceil(props.total / appConfig.posts.perPage),
);
const hasPage = computed(() => lastPage.value > 1);
const parts: Array<Pagination["part"]> = ["Previous", "Next"];

const linkTo = (part: Pagination["part"]) => {
  let page = 1;

  if (part === "Previous" && currentPage.value > 1) {
    page = currentPage.value - 1;
  } else if (part === "Next" && currentPage.value === lastPage.value) {
    page = lastPage.value;
  } else if (part === "Next" && currentPage.value !== lastPage.value) {
    page = currentPage.value + 1;
  }

  return {
    name: "posts-page-page",
    params: { page },
  };
};

const disabled = (part: Pagination["part"]) => {
  return ["Previous"].includes(part)
    ? currentPage.value < 2
    : currentPage.value >= lastPage.value;
};
</script>

<template>
  <nav v-if="hasPage" :class="$style.container" aria-label="page navigation">
    <div :class="$style.links">
      <NuxtLink
        v-for="part in parts"
        :key="part"
        :to="linkTo(part)"
        :class="$style.link"
        :aria-disabled="disabled(part)"
        :tabindex="disabled(part) ? -1 : 0"
        >{{ part === "Previous" ? "←" : "→" }}
        <div>{{ part }}</div>
      </NuxtLink>
    </div>
  </nav>
</template>

<style src="./styles.module.css" module />
