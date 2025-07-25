import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),

  {
    rules: {
      "@next/next/no-html-link-for-pages": "off", // ✅ Disables the rule
      'react/no-unescaped-entities': 'off', // ✅ Disables the rule for unescaped entities
    },
  },
];

export default eslintConfig;
