export default defineNuxtConfig({
  srcDir: "src/",
  typescript: {
    shim: false,
  },
  runtimeConfig: {
    contentfulSpaceId: "",
    contentfulAccessToken: "",
    contentfulMainTypeId: "",
    contentfulTagTypeId: "",
  },
  css: ["~/assets/css/app.css"],
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
    },
  },
});
