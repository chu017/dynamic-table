import { useState } from "react";
import "./App.css";

function App() {
  const [columnInput, setColumnInput] = useState(0);
  const [rowInput, setRowInput] = useState(0);

  const renderTable = (columnNum, rowNum) => {
    const table = [];
    const body = [];
    let tdIndex = 0;
    let trIndex = 0;
    for (let i = 0; i < rowNum; i++) {
      const row = [];
      for (let j = 0; j < columnNum; j++) {
        if (i === 0) {
          row.push(<th key={tdIndex}>{`${i}, ${j}`}</th>);
        } else {
          row.push(<td key={tdIndex}>{`${i}, ${j}`}</td>);
        }
        tdIndex++;
      }
      if (i === 0) {
        table.push(
          <thead key={"thead"}>
            <tr key={trIndex}>{row}</tr>
          </thead>
        );
      } else {
        body.push(<tr key={trIndex}>{row}</tr>);
      }
      trIndex++;
    }
    if (table.length > 0) {
      table.push(<tbody key={"tbody"}>{body}</tbody>);
    }
    return table;
  };

  return (
    <div className="App">
      <h3>Dynamic Table</h3>
      <form>
        <input
          type="number"
          name="column"
          value={columnInput}
          onChange={(e) => {
            if (e.target.value === "10") {
              setColumnInput(0);
            } else if (e.target.value === "-1") {
              setColumnInput(9);
            } else {
              setColumnInput(parseInt(e.target.value));
            }
          }}
        />
        <input
          type="number"
          name="row"
          value={rowInput}
          onChange={(e) => {
            if (e.target.value === "10") {
              setRowInput(0);
            } else if (e.target.value === "-1") {
              setRowInput(9);
            } else {
              setRowInput(parseInt(e.target.value));
            }
          }}
        />
      </form>
      <table>{renderTable(columnInput, rowInput)}</table>
    </div>
  );
}

export default App;
