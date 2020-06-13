import React from 'react';
import ToDoItem from './ToDoItem';

class Listicle extends React.Component {

  updateTask = (itemKey) => {
    console.log('itemkey', itemKey)
  }

  render() {
    return (
      <div className="listicle">
        {Object.keys(this.props.allToDos).map(key => (
          <ToDoItem 
            key={key}
            index={key}
            item={this.props.allToDos[key]}
            updateTask={this.updateTask}/>
        ))}
      </div>
    )
  }
}

export default Listicle;