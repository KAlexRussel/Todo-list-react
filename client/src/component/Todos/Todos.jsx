import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../loading/Loading";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material";

import "./style.css";
function Todos() {
  const { id } = useParams();
  const [todoDetails, setTodoDetails] = useState();

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
          <Link to="/">
            <p>go back</p>
          </Link>
          <div className="cards">
            <Paper elevation={3} className="editform">
              <div>
                <h1>{`Todo id: ${todoDetails.id}`}</h1>
                <h2>{`Todo userId: ${todoDetails.userId}`}</h2>
                <h3>{`Todo title: ${todoDetails.title}`}</h3>
                <h4>{`Todo completed: ${todoDetails.completed}`}</h4>
              </div>
              <div className="operations">
                <Link to={`/editblog/${id}`}>
                  <div>
                    <i className="fas fa-pen-square"></i>
                  </div>
                </Link>
                <div>
                  <Link to={"/"}>
                    <button
                      className="deleteButton"
                      onClick={() => handleDelete(id)}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </Paper>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Todos;
