export default defineNuxtConfig({
  srcDir: "src/",
  typescript: {
    shim: false,
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
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
    },
  },
});
