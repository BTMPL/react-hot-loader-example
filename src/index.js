import React from "react";
import { render } from "react-dom";
import App from "./App";

import { AppContainer } from "react-hot-loader";

render(<AppContainer><App /></AppContainer>, document.getElementById('a'));

if(module.hot) {
	module.hot.accept();
}
