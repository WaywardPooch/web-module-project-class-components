// ========== IMPORT
// Libraries
import React, { Component } from "react";
// Custom components
import Todo from "./Todo";

// ========== DEFINE
class TodoList extends Component {
  // ========== MARKUP
  render() {
    return (
      <div>
        {this.props.todos.map((task) => {
          return <Todo taskName={task} />;
        })}
      </div>
    );
  }
}

// ========== EXPORT
export default TodoList;
