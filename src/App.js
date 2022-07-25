import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table/Table";
import TabView from "./components/TabView/TabView";
import ListBox from "./components/ListBox/ListBox";

const COL_NAMES = ["name", "age", "subject", "grade"];
const LIST = [
  { name: "Jim", age: 25, subject: "Algebra", grade: 68 },
  { name: "Tiffany", age: 19, subject: "Biology", grade: 92 },
  { name: "Harry", age: 21, subject: "World History", grade: 81 },
  { name: "Gustavo", age: 24, subject: "Algebra", grade: 75 },
  { name: "Sue", age: 40, subject: "Biology", grade: 89 },
];

const StudentTable = (
  <Table
    title="Students"
    list={LIST}
    colNames={COL_NAMES}
    onDelete={(student) => console.log(student)}
    width="50%"
  />
);

const HelloList = <ListBox list={["Hello", "World", "!!!"]} widthPct={40} />;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="center">
          <TabView
            title={"Tab Test"}
            tabs={[
              { name: "Students", content: StudentTable },
              { name: "Hello", content: HelloList },
              { name: "Students 2", content: StudentTable },
              { name: "Hello 2", content: HelloList },
            ]}
          />
        </div>
      </div>
    );
  }
}

export default App;
