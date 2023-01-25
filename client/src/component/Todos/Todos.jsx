import React from "react";
import { useParams } from "react-router-dom";

function Todos() {
  const { id } = useParams();
  return <div>Todos</div>;
}

export default Todos;
