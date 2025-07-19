import * as contentful from "contentful";

export const createClient = () => {
  const runtimeConfig = useRuntimeConfig();

  return contentful.createClient({
    space: runtimeConfig.contentfulSpaceId,
    accessToken: runtimeConfig.contentfulAccessToken,
  });
};
