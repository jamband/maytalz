export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  app: {
    head: {
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
  },
  experimental: {
    payloadExtraction: true,
  },
  runtimeConfig: {
    contentfulSpaceId: "",
    contentfulAccessToken: "",
    contentfulPostsTypeId: "",
    contentfulTagsTypeId: "",
  },
  css: ["@/assets/css/app.css"],
  compatibilityDate: "2025-07-15",
});
