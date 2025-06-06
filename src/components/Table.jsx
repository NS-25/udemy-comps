import React from "react";

const Table = ({ data, config, keyFn }) => {
  const renderedHeader = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  ////
  const renderRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-2" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto bor der-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeader}</tr>
      </thead>
      <tbody>{renderRows}</tbody>
    </table>
  );
}; 

export default Table;
