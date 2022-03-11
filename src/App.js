import React, { Component } from "react";
import { countryList } from "./util/countries";
import "./App.css";
import ListBox from "./components/ListBox/ListBox";

class App extends Component {
  render() {
    const onSelected = (newSelection, selectedList) => {
      console.log("ns: ", newSelection);
      console.log("sl: ", selectedList);
    };

    return (
      <div className="App">
        <div className="center">
          <ListBox list={countryList} onSelected={onSelected} widthPct={20} />
        </div>
      </div>
    );
  }
}

export default App;
