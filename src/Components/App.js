import React from 'react';
import './App.css';
import axios from "axios";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    this.getData();
  }

  getData() {
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      this.setState({ data: response.data})
    });
  }

  render(){
    return (
      <div className="container">
        <div className="todo-list-container">
          <div className="input-container">
            <input className="input-field" type="text" placeholder="Enter task here" />
            <button className="add-button">
              <span className="material-symbols-outlined add-icon">add</span>
            </button>
          </div>
  
          <div className="data-container">
            {
              this.state.data.map((todo) => (
                <div className="todo-item-container">
                  <input type="checkbox" />
                  <div className="todo-item" key={todo.id}>
                    {todo.title}
                  </div>
                </div>
                )
              )
            }
          </div>

          <div className='button-container'>
            <button>
              <span className="delete-text">Delete</span> 
              <span className="material-symbols-outlined delete-icon">delete</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
