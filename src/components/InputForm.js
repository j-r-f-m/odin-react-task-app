import React, { Component } from "react";

class InputForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // destructuring
    const { onButtonClicked } = this.props;

    return (
      <div className="form-container">
        <input id="input-field" name="inputTasks" />
        <button className="btn" onClick={onButtonClicked}>
          Add task
        </button>
      </div>
    );
  }
}

export default InputForm;
