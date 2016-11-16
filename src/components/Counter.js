import React, { PropTypes } from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({count: this.state.count+1}), 1000);
  }

  componentWillUnmount() {
    if(this.interval) clearInterval(this.interval);
  }

  render () {
    return (
      <div>Counter (increments by one every second): {this.state.count}</div>
    )
  }
}

export default Counter;