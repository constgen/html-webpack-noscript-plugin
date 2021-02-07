# html-webpack-noscript-plugin

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