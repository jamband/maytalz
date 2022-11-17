import type { ContentfulClientApi } from "contentful";
import type { Post } from "~/types/post";

export const usePost = async () => {
  const { $client } = useNuxtApp();
  const runtimeConfig = useRuntimeConfig();
  const route = useRoute();

  return await ($client as ContentfulClientApi)
    .getEntries<Post>({
      content_type: runtimeConfig.contentfulMainTypeId,
      "fields.slug": route.params.slug,
    })
    .then((entries) => {
      return entries.items[0];
    });
};
