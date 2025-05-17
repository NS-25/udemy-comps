import React from "react";

const Table = ({ data, config }) => {
  const renderedHeader = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  ////
  const renderRows = data.map((fruit) => {
    return (
      <tr className="border" key={fruit.name}>
        <td className="p-3">{fruit.name}</td>
        <td className="p-3">
          <div className={`p-3 m-2 ${fruit.color}`}></div>
        </td>
        <td className="p-3">{fruit.score}</td>
      </tr>
    );
  });

  return (
    <table className="table-auto bor  der-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeader}</tr>
      </thead>
      <tbody>{renderRows}</tbody>
    </table>
  );
};

export default Table;
