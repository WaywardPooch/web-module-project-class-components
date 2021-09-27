// ========== IMPORTS
// Libraries
import React, { Component } from "react";

// ========== DEFINITIONS
class Todo extends Component {
  // ========== MARKUP
  render() {
    return (
      <div className="todo">
        <p>Task: {this.props.taskName}</p>
      </div>
    );
  }
}

// ========== EXPORTS
export default Todo;