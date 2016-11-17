import React from "react";
import { render } from "react-dom";
import App from "./components/App";

import { AppContainer } from "react-hot-loader";

render(<AppContainer><App /></AppContainer>, document.getElementById('a'));

if(module.hot) {
	module.hot.accept('./components/App', () => {
		console.log("index.js HMR");
		const NewApp = require('./components/App').default;
		render(<AppContainer><NewApp /></AppContainer>, document.getElementById('a'));
	});
}
