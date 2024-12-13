This is `eslint` config based on [cakkypamucm/eslint-config](https://github.com/cakkypamucm/eslint-config) with `typescript` support

### Install

```shell
npm i --save-dev github:cakkypamucm/eslint-config-vue-typescript2
```

### Use (exactly like [cakkypamucm/eslint-config](https://github.com/cakkypamucm/eslint-config/tree/master?tab=readme-ov-file#use))

-   add `eslint-config-vue-typescript2` to the "extends" array in your `eslint` config file

<pre>
{
    "extends": ["some-other-config-you-use", <b>"eslint-config-vue-typescript2"</b>]
}
</pre>

-   add [resolvers](https://github.com/import-js/eslint-plugin-import/wiki/Resolvers) to correct working `import/no-unresolved` rule.  
    For webpack-based projects e.g.:

1.

```shell
npm i --save-dev eslint-import-resolver-webpack
```

2.

```json
{
    "settings": {
        "import/resolver": ["node", "webpack"]
    }
}
```
