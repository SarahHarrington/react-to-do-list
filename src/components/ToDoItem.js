import React from 'react';

const ToDoItem = (props) => (
  
  <div className="task">
    <p>{props.item.task}</p>
    <button 
      onClick={() => props.updateTask(props.item)}>Done</button>
  </div>
)

export default ToDoItem;