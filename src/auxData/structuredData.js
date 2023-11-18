const excelData = require('./excelData');

const structuredData = () => {
  let rows = excelData.trim().split('\n');

  let columns = rows.map((row) => row.split('\t'));

  let arraysOfColumns = [];

  for (let i = 0; i < columns[0].length; i++) {
    let column = [];

    for (let j = 0; j < columns.length; j++) {
      column.push(columns[j][i]);
    }

    arraysOfColumns.push(column);
  }

  return arraysOfColumns;
};

module.exports = structuredData;
