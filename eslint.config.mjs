import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

/**
 * Flat config. eslint-config-next v16 ships native flat configs, so the
 * legacy FlatCompat shim is no longer needed.
 */
const eslintConfig = [
  ...coreWebVitals,
  ...typescript,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
