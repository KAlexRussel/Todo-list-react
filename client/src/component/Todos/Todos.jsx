import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../loading/Loading";
import { Link } from "react-router-dom";
// import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./style.css";
function Todos() {
  const { id } = useParams();
  const [todoDetails, setTodoDetails] = useState();
  const navigate = useNavigate();

  // const completeTodo = id => {
  //   let updatedTodos = todos.map(todo => {
  //     if (todo.id === id) {
  //       todo.isComplete = !todo.isComplete;
  //     }
  //     return todo;
  //   });
  //   setTodos(updatedTodos);
  // };
  const [comp, setComp] = useState(false);

  // useEffect(() => {
  //   completFfun();
  // }, [completFfun()]);

  const completFfun = () => {
    if (todoDetails.completed === true) {
      setComp(true);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("do you really want to delete this blog?")) {
      await axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => {
          console.log(res);
          console.log("deleted succesfully");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const responsetodo = res.data;
        setTodoDetails(responsetodo);
        // console.log(responsetodo);
      });
  }, [id]); //fire only one time
  //   console.log(todoDetails);
  //   const { userId, title, completed } = todoDetails;

  return (
    <div>
      {todoDetails ? (
        <>
          <div
            className="goback"
            onClick={() => {
              navigate("/");
            }}
          >
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
            <p className="goback1">go back</p>
          </div>

          {/* <Paper elevation={1} className="card2s"> */}
          <div className="card2s">
            <div>
              <p>
                <strong>Todo Number:</strong>
                {` ${todoDetails.id}`}
              </p>
              <p>
                <strong>UserId:</strong>
                {`Todo userId: ${todoDetails.userId}`}
              </p>
              {/* <p>Task of the day</p> */}
              <p>
                <strong>Task: </strong>
                {`${todoDetails.title}`}
              </p>
              {/* <div className="completion"> */}
              <p
                // className={comp ? "confirm" : "pending"}
                className="compp"
              >
                <strong>Completed: </strong>
                {/* {` ${todoDetails.completed}?`} */}
                {comp ? "Yes" : "No"}
              </p>
            </div>
            <div className="operations">
              <Link to={`/editblog/${id}`}>
                <div className="updateButton">
                  <i className="fas fa-pen-square"></i>
                </div>
              </Link>
              <div>
                <Link to={"/"}>
                  <button className="deleteButton" onClick={handleDelete}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* </Paper> */}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Todos;
