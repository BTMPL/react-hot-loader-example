import React from "react";
import { connect } from "react-redux";

const Item = (props) => {

	return (
		<div>Item name: {props.name}</div>
	)
};

const newItemAction = (data) => {
	return {
		type: "ADD_ITEM",
		payload: data
	};
}

class ReduxClient extends React.Component {

	constructor(props) {
		super(props);
		this.addItem = this.addItem.bind(this);
	}

	addItem() {
		this.props.dispatchItem({name: "new item"});
	}

	render() {
		return (
			<div>
				Items in the redux store:<br />
				{this.props.items.map((item, index) => <Item key={index} {...item} />)}
				<br />
				<button onClick={this.addItem}>Add an item</button>
			</div>
		);
	}
}

export default connect((state) => {
	return {
		items: state.items
	}
}, (dispatch) => {
	return {
		dispatchItem: (data) => dispatch(newItemAction(data))
	}
})(ReduxClient);