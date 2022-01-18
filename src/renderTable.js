const renderTable = (columnNum, rowNum) => {
  // input:
  // column = 2 (td), row = 3 (tr)

  // output:
  // [[[0,0], [0,1]],
  // [[1,0], [1,1]],
  // [[2,0], [2,1]]]

  // rendered table:
  /*
  <table>
    <thead>
      <tr>
        <td>[0,0]</td>
        <td>[0,1]</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>[1,0]</td>
        <td>[1,1]</td>
      </tr>
      <tr>
        <td>[2,0]</td>
        <td>[2,1]</td>
      </tr>
    </tbody>
  </table>
  */

  const table = [];
  for (let i = 0; i < rowNum; i++) {
    const row = [];
    for (let j = 0; j < columnNum; j++) {
      row.push([i, j]);
    }
    table.push(row);
  }
  return table;
};

console.log(renderTable(2, 3));
