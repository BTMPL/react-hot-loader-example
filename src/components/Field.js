import React from "react";

import Counter from "./Counter";

export default class Field extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return <div>
      Controlled field (state saved in this.state):<br />
      <input type="text" value={this.state.value} onChange={this.handleChange} />
      <br />
      <div className="example">
        Nested component:
        <Counter />
      </div>
    </div>
  }
}
