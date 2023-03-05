/* import logo from "./logo.svg"; */
import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Overview from "./components/Overview";
import InputForm from "./components/InputForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);

    this.inputValue = {
      tasksArray: [{ taskId: 0, taskName: "Clean House" }],
    };
  }

  // getting input from input field and push input input into array
  onClickBtn() {
    console.log("Add tasks");
    const currTask = document.getElementById("input-field");

    // create current task object
    const currTaskObj = {
      taskId: this.inputValue.tasksArray.length,
      taskName: currTask.value,
    };

    this.inputValue.tasksArray.push(currTaskObj);
    console.log(this.inputValue.tasksArray);

    // turn data into dom elements
    const arrayItems = this.inputValue.tasksArray.map((ele) => (
      <li key={ele.taskId}>ele</li>
    ));
    console.log(arrayItems);
    return <ul>{arrayItems}</ul>;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <InputForm onButtonClicked={this.onClickBtn} />
        <Overview />
      </div>
    );
  }
}

export default App;
