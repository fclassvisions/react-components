import React, { useState } from "react";

const btnStyle = {
  backgroundColor: "black",
  color: "white",
  border: "none",
  padding: "5px 10px",
};

function Table({
  title = "Table",
  list,
  colNames,
  pageNum = 0,
  pageSize = 10,
  width = "auto",
  height = "auto",
  onSelect = (obj) => console.log(obj),
  onDelete = null,
}) {
  const [page, setPage] = useState(pageNum);

  const getColumnLength = () => {
    const hasActions = onDelete;
    return hasActions ? colNames.length + 1 : colNames.length;
  };

  const onBack = () => {
    setPage(page - 1 > -1 ? page - 1 : page);
  };

  const onNext = () => {
    setPage(page + 1 < list.length / pageSize ? page + 1 : page);
  };

  return (
    <div style={{ width, boxShadow: "3px 6px 3px #ccc" }}>
      {list.length > 0 && (
        <table
          cellSpacing="0"
          style={{ width: "100%", height: height, padding: "5px 10px" }}
        >
          <thead style={{ backgroundColor: "black", color: "white" }}>
            <tr>
              <th colSpan={getColumnLength()} style={{ padding: "10px 0" }}>
                <h3>{title}</h3>
              </th>
            </tr>
            <tr>
              {colNames.map((headerItem, index) => (
                <th key={index}>{headerItem.toUpperCase()}</th>
              ))}
              {onDelete && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {Object.values(
              list.slice(pageSize * page, pageSize * page + pageSize)
            ).map((obj, index) => (
              <tr key={index}>
                {Object.values(obj).map((value, index2) => (
                  <td
                    key={index2}
                    className="hoverable"
                    style={{ padding: "5px 0" }}
                    onClick={() => onSelect(obj)}
                  >
                    {value}
                  </td>
                ))}
                {onDelete && (
                  <td>
                    <button
                      className="hoverable"
                      style={btnStyle}
                      onClick={() => onDelete(obj)}
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={getColumnLength()} style={{ padding: "10px 0" }}>
                ;
                <button className="hoverable" style={btnStyle} onClick={onBack}>
                  Back
                </button>
                <label style={{ padding: "0 1em" }}>{page + 1}</label>
                <button className="hoverable" style={btnStyle} onClick={onNext}>
                  Next
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
}

export default Table;
