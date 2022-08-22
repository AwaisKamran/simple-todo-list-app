import React from "react";
import "./App.css";
import axios from "axios";
import Heading from "./Heading/Heading";
import DataContainer from "./DataContainer/DataContainer";
import InputContainer from "./InputContainer/InputContainer";
import ActionContainer from "./ActionContainer/ActionContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    //this.getData();
  }

  getData() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      this.setState({ data: response.data });
    });
  }

  addItem = (title) => {
    if (title.trim().length === 0) {
      return false;
    }

    const data = [...this.state.data];

    data.push({
      id: data.length + 1,
      completed: false,
      userId: 10,
      title,
    });

    this.setState({ data });
  };

  deleteItem = (items) => {
    if (items.length > 0) {
      const data = [...this.state.data];
      // const newData = data.filter((todo) => {

      // })
    }
  };

  render() {
    console.log("App Component Rendered");
    return (
      <div className="container">
        <Heading />
        <div className="todo-list-container">
          <InputContainer addItem={this.addItem}></InputContainer>
          <DataContainer data={this.state.data}></DataContainer>
          <ActionContainer></ActionContainer>
        </div>
      </div>
    );
  }
}

export default App;
