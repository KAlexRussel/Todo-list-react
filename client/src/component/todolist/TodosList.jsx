import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const TodosList = () => {
  const [todos, setTodos] = useState();
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      const response = res.data;
      setTodos(response);
    });
  }, []); //fire only one time
  return <div></div>;
};

export default TodosList;
