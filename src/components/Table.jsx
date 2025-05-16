import React from "react";

const Table = ({ data }) => {
  const RenderRows = data.map((fruit) => {
    <tr>
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
      <tbody></tbody>
    </table>
  );
};

export default Table;
