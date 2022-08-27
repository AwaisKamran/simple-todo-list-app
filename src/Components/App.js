import React from "react";
import "./App.css";
import axios from "axios";
import Heading from "./Heading/Heading";
import DataContainer from "./DataContainer/DataContainer";
import InputContainer from "./InputContainer/InputContainer";
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

  selectItem = (id) => {
    let newData = [...this.state.data];

    newData.forEach((item) => {
      if (item.id == id) {
        item.completed = true;
      }
    });

    console.log(newData);
    this.setState({ data: newData });
  };

  addItem = (title) => {
    if (title) {
      const data = [...this.state.data];

      data.push({
        id: data.length + 1,
        completed: false,
        userId: 10,
        title,
      });

      this.setState({ data });
    }
  };

  deleteItem = (id) => {
    const data = [...this.state.data];
    const newData = data.filter((todo) => todo.id !== id);
    this.setState({ data: newData });
  };

  render() {
    console.log("App Component Rendered");
    return (
      <div className="container">
        <Heading />
        <div className="todo-list-container">
          <InputContainer addItem={this.addItem}></InputContainer>
          <DataContainer
            deleteItem={this.deleteItem}
            selectItem={this.selectItem}
            data={this.state.data}
          ></DataContainer>
        </div>
      </div>
    );
  }
}

export default App;
