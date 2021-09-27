// ========== IMPORT
// Libraries
import React from "react";
// Custom components
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

// ========== DEFINE
class App extends React.Component {
  // ========== CONSTRUCTOR / STATES
  constructor() {
    super();
    this.state = {
      todoList: [],
    };
  }

  // ========== EVENT HANDLERS
  handleAddTodo = (todo) => {
    const newTask = {
      task: todo,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      ...this.state,
      todoList: [newTask, ...this.state.todoList],
    });
  };

  handleClearCompletedTodos = () => {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.filter((task) => {
        return !task.completed;
      }),
    });
  };

  // ========== MARKUP
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList todos={this.state.todoList} />
        <TodoForm handleAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

// ========== EXPORT
export default App;
