import contentful, { createClient } from "contentful";

export const contentfulClient = () => {
  const runtimeConfig = useRuntimeConfig();

  const createClientFn =
    process.env.NODE_ENV === "development"
      ? createClient
      : contentful.createClient;

  return createClientFn({
    space: runtimeConfig.contentfulSpaceId,
    accessToken: runtimeConfig.contentfulAccessToken,
  });
};
