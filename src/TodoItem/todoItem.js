import React from 'react'

class todoItem extends React.Component {

  render() {

    const { todo } = this.props;

    return(
      <div onClick={this.toggleTodo}>{todo}</div>
    );
  }
toggleTodo = () => {
  
  }
}

export default todoItem;
