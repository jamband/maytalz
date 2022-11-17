import type { ContentfulClientApi } from "contentful";
import type { Post } from "~/types/post";

export const usePostCollection = async () => {
  const { $client } = useNuxtApp();
  const runtimeConfig = useRuntimeConfig();

  return await ($client as ContentfulClientApi)
    .getEntries<Post>({
      content_type: runtimeConfig.contentfulMainTypeId,
      order: "-sys.createdAt",
      limit: 10,
    })
    .then((entries) => {
      return {
        posts: entries.items,
        total: entries.total,
      };
    });
};
