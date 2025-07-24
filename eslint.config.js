// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import securityPlugin from "eslint-plugin-security";
import securityNodePlugin from "eslint-plugin-security-node";
import noUnsanitizedPlugin from "eslint-plugin-no-unsanitized";

export default [
  // Apply JavaScript recommended rules to all JavaScript files
  js.configs.recommended,
  
  // Base configuration for all files
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser
      }
    },
    plugins: {
      security: securityPlugin,
      "security-node": securityNodePlugin,
      "no-unsanitized": noUnsanitizedPlugin
    },
    rules: {
      // Base security rules
      "security/detect-eval-with-expression": "error",
      "security/detect-non-literal-require": "error",
      "security/detect-possible-timing-attacks": "error",
      "security/detect-buffer-noassert": "error",
      "security/detect-no-csrf-before-method-override": "error",
      "security/detect-unsafe-regex": "error",
      
      // Node.js security rules
      "security-node/detect-insecure-randomness": "error",
      "security-node/detect-unhandled-event-errors": "error",
      
      // XSS prevention rules
      "no-unsanitized/method": "error",
      "no-unsanitized/property": "error"
    }
  },
  
  // Ignore patterns
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "coverage/**"
    ]
  }
];