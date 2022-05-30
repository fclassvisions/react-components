import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table/Table";

const COL_NAMES = ["name", "age", "subject", "grade"];
const LIST = [
  { name: "Jim", age: 25, subject: "Algebra", grade: 68 },
  { name: "Tiffany", age: 19, subject: "Biology", grade: 92 },
  { name: "Harry", age: 21, subject: "World History", grade: 81 },
  { name: "Gustavo", age: 24, subject: "Political Science", grade: 75 },
  { name: "Sue", age: 40, subject: "Public Speaking", grade: 89 },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="center">
          <Table
            title="Students"
            list={LIST}
            colNames={COL_NAMES}
            onDelete={(student) => console.log(student)}
            width="50%"
          />
        </div>
      </div>
    );
  }
}

export default App;
