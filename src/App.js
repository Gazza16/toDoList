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
    )
  }
}

export default App;
