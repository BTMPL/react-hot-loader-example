module.exports = {
	entry: [
	  "webpack/hot/only-dev-server", // "only" stops HMR on syntax errors
	  "react-hot-loader/patch", // make sure the HMR package is included
	  "./src/index" // our application entry point
	],
	output: {
		path: __dirname + "/dist",
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: "dist/"
	},
	module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      },
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}
    ]
  }
}
