import React from "react";
import "./InputContainer.css"

const ENTER_KEY = 13;

export default class InputContainer extends React.PureComponent{
  constructor(props){
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount(){
    this.textInput.current.focus();
  }

  detectKey = (event) => {
    if(event.charCode === ENTER_KEY){
      this.addTodoItem()
      this.textInput.current.value = "";
    }
  }

  addTodoItem = () => {
    this.props.addItem(this.textInput.current.value);
  }

  render(){
    console.log("Input Container component rendered")
    return (
      <div className="input-container">
        <input onKeyPress={this.detectKey} ref={this.textInput} className="input-field" type="text" placeholder="Enter task here" />
        <button className="add-button" onClick={this.addTodoItem}>
          <span className="material-symbols-outlined add-icon">add</span>
        </button>
      </div>
    );
  }
}