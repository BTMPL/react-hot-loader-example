export default (state = {items: []}, action) => {
	switch(action.type) {
		case "ADD_ITEM":
		state = {items: [...state.items, action.payload]};
		return state;
	}
	return state;
}