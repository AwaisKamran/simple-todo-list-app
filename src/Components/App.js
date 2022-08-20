import React from 'react';
import './App.css';
import axios from "axios";

const ENTER_KEY = 13;
class App extends React.Component{
  constructor(props){
    super(props);
    this.textInput = React.createRef();
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    //this.getData();
    this.textInput.current.focus();
  }

  getData() {
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      this.setState({ data: response.data})
    });
  }

  addItem = () => {
    const title = this.textInput.current.value;
    if(title){
      const data = [... this.state.data];

      data.push({
        id: data.length + 1,
        completed: false,
        userId: 10,
        title,
      });
  
      this.setState({ data })
    }
  }

  detectKey = (event) => {
    if(event.charCode === ENTER_KEY){
      this.addItem()
      this.textInput.current.value = "";
    }
  }

  render(){
    return (
      <div className="container">
        <div className='heading'>Todo List</div>
        <div className="todo-list-container">
          <div className="input-container">
            <input onKeyPress={this.detectKey} ref={this.textInput} className="input-field" type="text" placeholder="Enter task here" />
            <button className="add-button" onClick={this.addItem}>
              <span className="material-symbols-outlined add-icon">add</span>
            </button>
          </div>
  
          <div className="data-container">
            {
              this.state.data.length > 0 ? 
                this.state.data.map((todo) => (
                  <div key={todo.id} className="todo-item-container">
                    <input type="checkbox" />
                    <div className="todo-item">
                      {todo.title}
                    </div>
                  </div>
                  )
                ): <div className="no-data">No data available</div>
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
