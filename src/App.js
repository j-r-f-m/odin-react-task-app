/* import logo from "./logo.svg"; */
import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Overview from "./components/Overview";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Overview />
      </div>
    );
  }
}

export default App;
