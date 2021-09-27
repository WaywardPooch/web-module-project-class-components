// ========== IMPORT
// Libraries
import React from "react";
// Custom components
import TodoList from "./components/TodoList";

// ========== DEFINE
class App extends React.Component {
  // ========== CONSTRUCTOR / STATES
  constructor() {
    super();
    this.state = {
      todoList: ["item1","item2"],
    };
  }

  // ========== EVENT HANDLERS

  // ========== MARKUP
  render() {
    return (
      <div>
        <TodoList todos={this.state.todoList}/>
      </div>
    );
  }
}

// ========== EXPORT
export default App;
