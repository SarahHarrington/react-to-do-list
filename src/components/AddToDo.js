import React from 'react';

class AddToDo extends React.Component {
  newToDoRef = React.createRef();

  createToDo = (event) => {
    event.preventDefault();
    console.log(event)
    const toDo = {
      task: this.newToDoRef.current.value
    }

    console.log('the to do', toDo)
    this.props.addToDoToListicle(toDo)
  }

  render() {
    return (
      <form onSubmit={this.createToDo}>
      <input 
        name="newToDo"
        ref={this.newToDoRef} 
        type="text"
        placeholder="What are you doing?"/>
      <button>Save!</button>
    </form>
    )
  }
}

export default AddToDo;