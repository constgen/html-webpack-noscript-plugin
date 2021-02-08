# html-webpack-noscript-plugin

[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-downloads]][npm-url]
[![NPM Package][workflow-status]][actions]

Webpack Plugin that extends HtmlWebpackPlugin template with `<noscript>` tag with arbitrary HTML content inside

## Installation

`html-webpack-noscript-plugin` can be installed using NPM. Inside your project, make sure `html-webpack-plugin` is a development dependency.

```bash
npm install --save-dev html-webpack-plugin html-webpack-noscript-plugin
```

## Setup

This plugin should go after `HtmlWebpackPlugin` in the `plugins` config

**webpack.config.js**

```js
let HtmlWebpackPlugin         = require('html-webpack-plugin')
let HtmlWebpackNoscriptPlugin = require('html-webpack-noscript-plugin')

const DISABLED_JAVASCRIPT_MESSAGE = `We're sorry but our app doesn't work properly <b>without JavaScript enabled</b>. Please enable it to continue.`

module.exports = {
   plugins: [
      new HtmlWebpackPlugin(),
      new HtmlWebpackNoscriptPlugin(DISABLED_JAVASCRIPT_MESSAGE)
   ]
}
```

This will affect the compiled HTML file

**index.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Webpack App</title>
  </head>
  <body>
    <noscript>We're sorry but our app doesn't work properly <b>without JavaScript enabled</b>. Please enable it to continue.</noscript>
    <script src="index_bundle.js"></script>
  </body>
</html>
```

[npm-image]: https://img.shields.io/npm/v/html-webpack-noscript-plugin.svg
[npm-downloads]: https://img.shields.io/npm/dt/html-webpack-noscript-plugin.svg
[npm-url]: https://npmjs.org/package/html-webpack-noscript-plugin
[actions]: https://github.com/constgen/html-webpack-noscript-plugin/actions
[workflow-status]: https://github.com/constgen/html-webpack-noscript-plugin/workflows/NPM%20Package/badge.svg?branch=main