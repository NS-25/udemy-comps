import React from "react";

const Table = ({ data, config }) => {
  const renderedHeader = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  ////
  const renderRows = data.map((fruit) => {
    return (
      <tr className="border" key={fruit.name}>
        <td className="p-3">{config[0].render(fruit)}</td>
        <td className="p-3">{config[1].render(fruit)}</td>
        <td className="p-3">{config[2].render(fruit)}</td>
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
