<script lang="ts" setup>
const props = defineProps<{
  title: string;
  description: string;
}>();

const appConfig = useAppConfig();
const route = useRoute();

const title =
  props.title === "" ? appConfig.name : `${props.title} ･ ${appConfig.name}`;

const description =
  props.description === "" ? appConfig.description : props.description;
</script>

<template>
  <Head>
    <Meta name="description" :content="description" />
    <Meta name="og:type" content="website" />
    <Meta name="og:site_name" :content="appConfig.name" />
    <Meta name="og:url" :content="`${appConfig.site}${route.path}`" />
    <Meta name="og:title" :content="title" />
    <Meta name="og:description" :content="description" />
    <slot />
    <Title>{{ title }}</Title>
  </Head>
</template>
