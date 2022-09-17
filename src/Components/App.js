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
    this.getData();
  }

  getData() {
    axios.get("http://localhost:8081/todos").then((response) => {
      this.setState({ data: response.data });
    });
  }

  postData(data) {
    axios.post("http://localhost:8081/todos", data).then((response) => {});
  }

  updateData(id) {
    axios.put(`http://localhost:8081/todos/${id}`).then((response) => {});
  }

  deleteData(id) {
    axios.delete(`http://localhost:8081/todos/${id}`).then((response) => {});
  }

  selectItem = (id) => {
    let newData = [...this.state.data];

    newData.forEach((item) => {
      if (item.id == id) {
        item.completed = !item.completed;
      }
    });

    this.setState({ data: newData });
    this.updateData(id);
  };

  addItem = (title) => {
    if (title) {
      const data = [...this.state.data];
      let newData = {
        id: this.findMaxId() + 1,
        completed: false,
        userId: 10,
        title,
      };

      data.push(newData);
      this.setState({ data });
      this.postData(newData);
    }
  };

  deleteItem = (id) => {
    const data = [...this.state.data];
    const newData = data.filter((todo) => todo.id !== id);
    this.setState({ data: newData });
    this.deleteData(id);
  };

  findMaxId = () => {
    const data = [...this.state.data];
    const newData = data.map((data) => data.id);
    console.log(newData);
    console.log(Math.max(...newData));
    return Math.max(...newData);
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
