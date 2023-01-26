import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../loading/Loading";
import TodoCard from "../TodoCard/TodoCard";
import "./style.css";
const TodosList = () => {
  const [todos, setTodos] = useState();
  const [postData, setPostData] = useState({
    userId: "",
    title: "",
    completed: "false",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      .post("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => {
        console.log("todo Created Successfully");
        console.log("Response", resp);

        setPostData({
          ...postData,
          title: "",
          completed: "false",
        });

        // navigate("/");
      })
      .catch((err) => {
        console.log("something when wrong");
      });
  };
  const handleDelete = async (id) => {
    if (window.confirm("do you really want to delete this blog?")) {
      await axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => {
          console.log(res);
          console.log("deleted succesfully");
          datagg();
          setTimeout(() => {
            window.location.reload();
          }, 0);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    datagg();
  }, []); //fire only one time
  // console.log(todos);
  const datagg = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      const response = res.data;
      setTodos(response);
    });
  };

  return (
    <>
      <div className="head">
        <h1>What's the Plan for Today?</h1>
        <input
          autoComplete="off"
          type={"text"}
          placeholder="Add a todo"
          value={postData.tittle}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          name="text"
          className="todo-input"
        />
        <button className="todo-button" onClick={handleSubmit}>
          Add todo
        </button>
      </div>
      {todos ? (
        <div className="todolist">
          {todos
            .slice(0, 20)
            .reverse()
            .map((todo) => (
              <TodoCard todo={todo} handleDelete={handleDelete} />
            ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default TodosList;
