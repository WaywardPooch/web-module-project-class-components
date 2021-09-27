// ========== IMPORT
// Libraries
import React, { Component } from "react";
// Custom components
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

// ========== DEFINE
class App extends Component {
  // ========== CONSTRUCTOR / STATES
  constructor() {
    super();
    this.state = {
      todoList: [],
    };
  }

  // ========== EVENT HANDLERS
  handleAdd = (todo) => {
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

  handleToggle = (id) => {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: todo.completed ? false : true,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  handleClear = () => {
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
        <button onClick={this.handleClear}>Clear Completed</button>
        <TodoList
          handleToggle={this.handleToggle}
          todos={this.state.todoList}
        />
        <TodoForm handleAdd={this.handleAdd} />
      </div>
    );
  }
}

// ========== EXPORT
export default App;
