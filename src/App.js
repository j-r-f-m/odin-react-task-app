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
      task: [],
    };
  }

  onClickBtn() {
    console.log("Add tasks");
    const currTask = document.getElementById("input-field");

    this.inputValue.task.push(currTask.value);
    console.log(this.inputValue.task);
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
