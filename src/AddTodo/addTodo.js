import React from 'react'

class AddTodo extends React.Component {

  render() {
    return(
      <div className = "addTodoContainer">
        <form>
          <input onChange={} type="text"></input>
          <button type="submitt"></button>
        </form>
      </div>
    )
  }

updateInput = (e) => {
  console.log(e);
}
submitTodo = () => {
  console.log('submit');
}

export default AddTodo;
