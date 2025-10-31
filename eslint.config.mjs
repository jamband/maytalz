import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import vue from "eslint-plugin-vue";
import { defineConfig, globalIgnores } from "eslint/config";
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
      parser: vueParser,
      parserOptions: {
        parser: ts.parser,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-undef": "off",
      "vue/multi-word-component-names": "off",
    },
  },
  prettier,
);
