import React, { Component } from "react";
class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-container">
        <h1>Tasks Overview</h1>
      </div>
    );
  }
}

export default Header;
