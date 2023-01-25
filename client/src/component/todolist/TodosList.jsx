import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../loading/Loading";

const TodosList = () => {
  const [todos, setTodos] = useState();
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      const response = res.data;
      setTodos(response);
    });
  }, []); //fire only one time
  // console.log(todos);
  return (
    <>
      {todos ? (
        <div>
          {todos.map((todo) => {
            const { title, completed } = todo;
            return (
              <div>
                <h4>{title}</h4>

                <h6> {`Completed: ${completed}`}</h6>
                <hr></hr>
                <br></br>
              </div>
            );
          })}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default TodosList;
