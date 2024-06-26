import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

// Specify ignore patterns here
const ignorePatterns = [".nuxt", "node_modules", "dist", "public"];

export default [
  ...compat.extends("@nuxt"),
  {
    ignores: ignorePatterns,
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "vue/valid-v-for": "off",
    },
  },
];
