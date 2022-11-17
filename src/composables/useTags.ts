import type { ContentfulClientApi } from "contentful";
import type { Post } from "~/types/post";

export const useTags = async () => {
  const { $client } = useNuxtApp();
  const runtimeConfig = useRuntimeConfig();
  const route = useRoute();

  return await ($client as ContentfulClientApi)
    .getEntries<Post>({
      content_type: runtimeConfig.contentfulTagTypeId,
      "fields.slug": route.params.slug,
    })
    .then(async (entries) => {
      return await ($client as ContentfulClientApi)
        .getEntries<Post>({
          content_type: runtimeConfig.contentfulMainTypeId,
          order: "-sys.createdAt",
          "fields.tags.sys.id": entries.items[0].sys.id,
        })
        .then((entries) => {
          return entries.items;
        });
    });
};
