import React, { Component } from "react"
import "./App.css"
import Table from "./components/Table/Table"

const colNames = ["ID", "Name", "Age"]
const list = [
  { id: 1, name: "John Doe", age: 28 },
  { id: 2, name: "Jane Doe", age: 45 },
  { id: 3, name: "John Smith", age: 32 },
  { id: 4, name: "Tevin Johnson", age: 21 },
  { id: 5, name: "Tim Maker", age: 62 },
  { id: 6, name: "Maggie Forster", age: 37 },
  { id: 7, name: "Alton Jefferson", age: 43 },
  { id: 8, name: "Willie Pace", age: 50 },
  { id: 9, name: "Hayley Dodd", age: 18 },
  { id: 10, name: "Beatrice Mason", age: 26 },
  { id: 11, name: "Rhonda Goodson", age: 34 },
  { id: 12, name: "Sherry Watts", age: 32 },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table list={list} colNames={colNames} pageSize={3} />
      </div>
    )
  }
}

export default App
