import React from "react";
import "./DataContainer.css";
export default class DataContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Data Container Component Rendered");
    return (
      <div className="data-container">
        {this.props.data.length > 0 ? (
          this.props.data.map((todo) => (
            <div key={todo.id} className="todo-item-container">
              <input
                onChange={() => this.props.selectItem(todo.id)}
                type="checkbox"
                checked={todo.completed}
              />
              <div className="todo-item">{todo.title}</div>
              <span
                onClick={() => {
                  this.props.deleteItem(todo.id);
                }}
                className="material-symbols-outlined delete-icon"
              >
                close
              </span>
            </div>
          ))
        ) : (
          <div className="no-data">No data available</div>
        )}
      </div>
    );
  }
}
