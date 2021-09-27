// ========== IMPORTS
// Libraries
import React, { Component } from "react";

// ========== DEFINITIONS
class TodoForm extends Component {
  // ========== CONSTRUCTOR / STATES
  constructor() {
    super();
    this.state = {
      inputContent: "",
    };
  }

  // ========== EVENT HANDLERS
  handleInputChange = (event) => {
    this.setState({
      ...this.state,
      inputContent: event.target.value,
    });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.handleAdd(this.state.inputContent);
  };

  // ========== MARKUP
  render() {
    return (
      <form>
        <input
          type="text"
          name="add-task-field"
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleFormSubmit}>Add Item</button>
      </form>
    );
  }
}

// ========== EXPORTS
export default TodoForm;
