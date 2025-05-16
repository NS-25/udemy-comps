import React from "react";

const Table = ({ data }) => {
  const renderRows = data.map((fruit) => {
    return (
      <tr key={fruit.name}>
        <td>{fruit.name}</td>
        <td>{fruit.color}</td>
        <td>{fruit.score}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Fruit</th>
        </tr>
        <tr>
          <th>Color</th>
        </tr>
        <tr>Score</tr>
      </thead>
      <tbody>{renderRows}</tbody>
    </table>
  );
};

export default Table;
