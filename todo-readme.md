# TODO

To get rid of the "React-Hot-Loader: react-fire-dom patch..." warning:

See: https://github.com/gatsbyjs/gatsby/issues/11934
Which references: https://github.com/hot-loader/react-dom#yarn-any-other-system

```sh
yarn add react-dom@npm:@hot-loader/react-dom@16.12.0
```

And add this to gatsby-node.js:

```js
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}
```
