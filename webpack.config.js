var path = require('path')

module.exports = {
	entry: path.join(__dirname, 'index.js'),
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'cURLImporter.js',
	},
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.js'],
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
		],
	},
}
