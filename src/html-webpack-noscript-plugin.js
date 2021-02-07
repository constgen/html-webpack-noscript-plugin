let HtmlWebpackPlugin = require('html-webpack-plugin')

function isHtmlWebpakckPlugin (plugin) {
	return plugin instanceof HtmlWebpackPlugin
}

module.exports = class HtmlWebpackNoscriptPlugin {
	constructor (placeholder) {
		this.placeholder = placeholder
	}
	apply (compiler) {
		const PLUGIN_NAME  = 'HtmlWebpackNoscriptPlugin'
		let noscriptPlugin = this

		function handleAlterAssetTag (htmlPluginData, callback) {
			noscriptPlugin.injectTag(htmlPluginData)
			callback()
		}

		compiler.hooks.compilation.tap(PLUGIN_NAME, function (compilation) {
			let htmlWebpackPluginIsOld = compilation.hooks.htmlWebpackPluginBeforeHtmlGeneration

			if (htmlWebpackPluginIsOld) {
				compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync(PLUGIN_NAME, handleAlterAssetTag)
			}
			else {
				let hooks               = HtmlWebpackPlugin.getHooks(compilation)
				let htmlPluginIsDefined = compilation.options.plugins.some(isHtmlWebpakckPlugin)

				if (!htmlPluginIsDefined) {
					throw new Error('Error in HtmlWebpackNoscriptPlugin. HtmlWebpackPlugin not found before in your webpack config')
				}
				hooks.alterAssetTagGroups.tapAsync(PLUGIN_NAME, handleAlterAssetTag)
			}
		})
	}
	injectTag (htmlPluginData) {
		let bodyTags = htmlPluginData.bodyTags || htmlPluginData.body

		bodyTags.unshift({
			tagName  : 'noscript',
			closeTag : true,
			voidTag  : false,
			innerHTML: this.placeholder
		})
	}
}