import React from 'react';
import './App.css';
import axios from "axios";
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';

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

  getData(){
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      this.setState({ data: response.data})
    });
  }

  render(){
    return (
      <div className="container">
        <div className="todo-list-container">
          <div className="input-container">
            <input className="input-field" type="text" placeholder="Enter task here" />
            <button className="add-button">Add</button>
          </div>
  
          <div className="data-container">
            {
              this.state.data.map((todo) => (<div>{todo.title}</div>))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
