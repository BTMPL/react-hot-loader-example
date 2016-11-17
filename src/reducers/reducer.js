export default (state = {items: []}, action) => {
	switch(action.type) {
		case "ADD_ITEM":
		// comment/uncomment those two lines to test reducer HMR
		state = {items: [...state.items, action.payload]};		
		//state = {items: [...state.items, {name: "reducer reloaded"}]};
		return state;
	}
	return state;
}