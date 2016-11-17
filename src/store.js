import { createStore } from "redux";
import testReducer from "./reducers/reducer";

export default function() {
	let store = createStore(testReducer);

	if(module.hot) {
	  module.hot.accept('./reducers/reducer.js', () => {
	    const newReducer = require('./reducers/reducer.js').default;
	    store.replaceReducer(newReducer);
	  });
	}	

	return store;
}