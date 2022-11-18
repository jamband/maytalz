import contentful, { createClient } from "contentful";
import type { Post } from "~/types/post";

export const useTags = async () => {
  const route = useRoute();
  const runtimeConfig = useRuntimeConfig();

  return await useAsyncData(route.fullPath, async () => {
    const createClientFn =
      process.env.NODE_ENV === "development"
        ? createClient
        : contentful.createClient;

    return await createClientFn({
      space: runtimeConfig.contentfulSpaceId,
      accessToken: runtimeConfig.contentfulAccessToken,
    })
      .getEntries<Post>({
        content_type: runtimeConfig.contentfulTagTypeId,
        "fields.slug": route.params.slug,
      })
      .then(async (entries) => {
        return await createClientFn({
          space: runtimeConfig.contentfulSpaceId,
          accessToken: runtimeConfig.contentfulAccessToken,
        })
          .getEntries<Post>({
            content_type: runtimeConfig.contentfulMainTypeId,
            order: "-sys.createdAt",
            "fields.tags.sys.id": entries.items[0].sys.id,
          })
          .then((entries) => {
            return entries.items;
          });
      });
  });
};
