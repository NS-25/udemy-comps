import React from "react";

const Table = ({ data }) => {
  const renderRows = data.map((fruit) => {
    <tr key={fruit.name}>
      <td>{fruit.name}</td>
      <td>{fruit.color}</td>
      <td>{fruit.score}</td>
    </tr>;
  });

  return (
    <table>
      <thead>
        <tr>Fruit</tr>
        <tr>Color</tr>
        <tr>Score</tr>
      </thead>
      <tbody>{renderRows}</tbody>
    </table>
  );
};

export default Table;
