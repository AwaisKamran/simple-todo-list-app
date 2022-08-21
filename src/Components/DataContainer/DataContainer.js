import React from "react";
import "./DataContainer.css";

export default class DataContainer extends React.Component{
  itemsToDelete = [];

  constructor(props){
    super(props);
  }

  detectChange(id){
    this.itemsToDelete.push(id);
    console.log(this.itemsToDelete);
  }

  render(){
    console.log("Data Container Component Rendered");
    return (
      <div className="data-container">
        {
          this.props.data.length > 0 ? 
            this.props.data.map((todo) => (
              <div key={todo.id} className="todo-item-container">
                <input onChange={()=> this.detectChange(todo.id)} type="checkbox" />
                <div className="todo-item">
                  {todo.title}
                </div>
              </div>
              )
          ): <div className="no-data">No data available</div>
        }
      </div>
    );
  }
}