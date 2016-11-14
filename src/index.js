import React from "react";
import { render } from "react-dom";
import App from "./App";

import { AppContainer } from "react-hot-loader";

render(<App />, document.getElementById('a'));
if(module.hot) {
	module.hot.accept();
}

