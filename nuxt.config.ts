const isDev = process.env.NODE_ENV === "development";

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
    public: {
      contentfulSpaceId: isDev ? "" : undefined,
      contentfulAccessToken: isDev ? "" : undefined,
      contentfulMainTypeId: isDev ? "" : undefined,
      contentfulTagTypeId: isDev ? "" : undefined,
    },
  },
  css: ["~/assets/css/app.css"],
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
    },
  },
});
