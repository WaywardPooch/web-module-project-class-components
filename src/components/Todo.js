// ========== IMPORTS
// Libraries
import React, { Component } from "react";
// Styles
import "./Todo.css";

// ========== DEFINITIONS
class Todo extends Component {
  // ========== EVENT HANDLERS
  handleClick = () => {
    this.props.handleToggle(this.props.todo.id);
  };

  // ========== MARKUP
  render() {
    return (
      <div
        onClick={this.handleClick}
        className={this.props.todo.completed ? "completed" : ""}
      >
        <p>Task: {this.props.todo.task}</p>
      </div>
    );
  }
}

// ========== EXPORTS
export default Todo;
