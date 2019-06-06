import React from 'react';
import TodoList from './TodoList/todoList'
import TodoItem from './TodoItem/todoItem'
import AddTodo from './AddTodo/addTodo'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  render() {
    return(
      <div>
      <TodoList />
      <TodoItem />
      <AddTodo />
      </div>
    );
  }

  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if(todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });
      console.log('Has todos', todos);
    } else {
      console.log('No todos');
    }
  }

}

export default App;
