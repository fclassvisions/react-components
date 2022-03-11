import React, { useState } from "react";
import "./ListBox.css";

const HIGHLIGHT_COLOR = "rgb(221, 170, 119)";
const onSelectedPlaceholder = (newSelection, selectedList) => {};

function ListBox({
  list = [],
  onSelected = onSelectedPlaceholder,
  widthPct = 100,
  maxHeight = "400px",
}) {
  const [filterText, setFilterText] = useState("");
  const [filteredList, setFilteredList] = useState(list);
  const [selectedValues, setSelectedValues] = useState([]);

  const onFilter = (filter) => {
    setFilterText(filter);
    if (!filter || filter === "") {
      setFilteredList(list);
      return;
    }

    setFilteredList(
      list.filter((item) => item.toLowerCase().includes(filter.toLowerCase()))
    );
  };

  const onSelect = (item) => {
    let newSelections = [...selectedValues, item];

    if (selectedValues.includes(item)) {
      newSelections = newSelections.filter((selection) => selection !== item);
    }

    setSelectedValues(newSelections);
    setFilterText("");
    onFilter("");
    onSelected(item, newSelections);
  };

  return (
    <div className="ListBox" style={{ width: widthPct + "%" }}>
      <div className="block">
        <input
          className="full-width"
          type="text"
          placeholder={selectedValues.join(", ")}
          onChange={(e) => onFilter(e.target.value)}
          value={filterText}
        />
      </div>
      <ul className="full-width overflow-auto" style={{ maxHeight: maxHeight }}>
        {filteredList.map((item, index) => (
          <li
            key={index}
            className="no-highlight"
            style={{
              backgroundColor: selectedValues.includes(item)
                ? HIGHLIGHT_COLOR
                : "white",
            }}
            value={item}
            onClick={() => onSelect(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListBox;
