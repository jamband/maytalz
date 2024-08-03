export default defineNuxtConfig({
  srcDir: "src/",
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
});
