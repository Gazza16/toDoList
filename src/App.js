import React from 'react';
import TodoList from './TodoList/todoList'
import TodoItem from './TodoItem/todoItem'

class App extends React.Component {
  render() {
    return(
      <div>
      <TodoList />
      <TodoItem />
      </div>
    );
  }

  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if(todos) {
      console.log('Has todos', todos);
    } else {
      console.log('No todos');
    }
  }

}

export default App;
