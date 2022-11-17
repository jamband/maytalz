import contentful, { createClient } from "contentful";

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig();

  const createClientFn =
    process.env.NODE_ENV === "development"
      ? createClient
      : contentful.createClient;

  return {
    provide: {
      client: createClientFn({
        space: runtimeConfig.contentfulSpaceId,
        accessToken: runtimeConfig.contentfulAccessToken,
      }),
    },
  };
});
