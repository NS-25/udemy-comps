import React from "react";
import Table from "../components/Table";

const TablePage = () => {
  const data = [
    { name: "orange", color: "bg-orange-500", score: 5 },
    { name: "orange", color: "bg-orange-500", score: 5 },
    { name: "orange", color: "bg-orange-500", score: 5 },
    { name: "orange", color: "bg-orange-500", score: 5 },
  ];
  return (
    <div>
      <Table />
    </div>
  );
};

export default TablePage;
