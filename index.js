/* eslint sort-keys/sort-keys-fix: "error" */
/* eslint-disable sort-keys/sort-keys-fix */
module.exports = {
    plugins: ["@typescript-eslint"],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        project: true,
        extraFileExtensions: [".vue"]
    },
    extends: [
        "eslint-config-cakkypamucm",
        `plugin:vue-scoped-css/vue3-recommended`,
        `plugin:vue/vue3-recommended`,
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "prettier"
    ],
    /* eslint-enable sort-keys/sort-keys-fix */
    rules: {
        "vue-scoped-css/require-selector-used-inside": "error",
        "vue-scoped-css/v-deep-pseudo-style": ["error", ":deep"],
        "vue-scoped-css/v-global-pseudo-style": ["error", ":global"],
        "vue-scoped-css/v-slotted-pseudo-style": ["error", ":slotted"],

        "vue/block-tag-newline": "error",
        "vue/html-button-has-type": "error",
        "vue/html-comment-content-newline": "error",
        "vue/html-comment-content-spacing": "error",
        "vue/html-comment-indent": "error",
        "vue/html-indent": "off",
        "vue/multi-word-component-names": "off",
        "vue/next-tick-style": ["error", "promise"],
        "vue/no-duplicate-attr-inheritance": "error",
        "vue/no-irregular-whitespace": "error",
        "vue/no-multiple-objects-in-class": "error",
        "vue/no-potential-component-option-typo": [
            "error",
            {
                presets: ["all"]
            }
        ],
        "vue/no-static-inline-styles": [
            "error",
            {
                allowBinding: true
            }
        ],
        "vue/no-template-target-blank": "error",
        "vue/no-useless-mustaches": "error",
        "vue/padding-line-between-blocks": "error",
        "vue/require-explicit-emits": "error",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/consistent-type-exports": "error",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/method-signature-style": "error",
        "@typescript-eslint/no-import-type-side-effects": "error",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unnecessary-condition": "off",
        "@typescript-eslint/no-use-before-define": [
            "error",
            {
                ignoreTypeReferences: true
            }
        ],
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "import/extensions": ["error", { vue: "always" }],
        "no-use-before-define": "off",
        "vue/block-lang": [
            "error",
            {
                script: {
                    lang: "ts"
                }
            }
        ]
    },
    /* eslint-disable sort-keys/sort-keys-fix */
};
