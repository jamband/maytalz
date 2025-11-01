import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import vue from "eslint-plugin-vue";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import ts from "typescript-eslint";
import vueParser from "vue-eslint-parser";

export default defineConfig(
  [globalIgnores([".nuxt/", ".output/"])],
  {
    files: ["**/*.{js,ts}", "app/**/*.vue"],
    extends: [
      js.configs.recommended,
      ts.configs.recommended,
      vue.configs["flat/recommended"],
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: vueParser,
      parserOptions: {
        parser: ts.parser,
      },
    },
  },
  {
    files: ["**/*.{ts,vue}"],
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "no-undef": "off",
      "vue/multi-word-component-names": "off",
    },
  },
  prettier,
);
