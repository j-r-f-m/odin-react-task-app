import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="overview-container">
        {/* <ul>{console.log(this.props.arr)}</ul> */}
        <ul>
          {this.props.arr.map((ele) => {
            return <li key={ele.taskId}>{ele.taskName}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Overview;

// {this.props.arr.map((ele) => (
//   <li key={ele.taskId}>{ele}</li>
// ))}

// {this.props.tasksArray.map((ele) => (
//   <li key={ele.taskId}>{ele}</li>
// ))}

// turn data into dom elements
// const arrayItems = this.inputValue.tasksArray.map((ele) => (
//   <li key={ele.taskId}>ele</li>
// ));
// console.log(arrayItems);
// return <ul>{arrayItems}</ul>;
