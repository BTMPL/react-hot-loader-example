import React from "react";
import Field from "./Field.js";

import Counter from "./Counter.js";

require("./App.css");

class App extends React.Component {

  render() {
    return (
      <div>
        <div className="intro">
          Bellow you will find a couple of Components. Please open the corresponding file and make changes to see how the app updates:
        </div>
        <div className="example">
          <code>App.js</code>
          <br />
          Un-controlled input field (no state save):<br />
          <input type="text" />
        </div>
        <div className="example">
          <code>Counter.js</code>
          <Counter />
        </div>
        <div className="example">
          <code>Field.js</code>
          <Field />
        </div>
      </div>
    )
  }
}

export default App;