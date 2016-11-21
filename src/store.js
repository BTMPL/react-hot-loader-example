import { createStore } from "redux";
import testReducer from "./reducers/reducer";

let store = createStore(testReducer);

export default function() {

	if(module.hot) {
	  module.hot.accept('./reducers/reducer.js', () => {
	  	console.log("store.js HMR");
	    const newReducer = require('./reducers/reducer.js').default;
	    store.replaceReducer(newReducer);
	  });
	}	

	return store;
}