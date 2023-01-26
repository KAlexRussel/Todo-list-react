import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import axios from "axios";
import "./styles.css";
const TodoCard = ({ todo, handleDelete }) => {
  // const { todo } = props;
  const { id, title, completed } = todo;
  const navigate = useNavigate();
  const [comp, setComp] = useState(false);

  useEffect(() => {
    completFun();
  }, []);

  const completFun = () => {
    if (completed == true) {
      setComp(true);
    }
  };
  // const handleDelete = async (id) => {
  //   if (window.confirm("do you really want to delete this blog?")) {
  //     await axios
  //       .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  //       .then((res) => {
  //         console.log(res);
  //         console.log("deleted succesfully");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // };
  return (
    <div className="todoCard">
      <div
        onClick={() => {
          navigate(`./todos/${id}`);
        }}
      >
        <p className="task1">{`Todo Number:${id}`}</p>
        <p>{title}</p>
        <p className={comp ? "confirm" : "pending"}>
          {comp ? `Completed: YES` : "Completed: NO"}
        </p>
      </div>

      <div className="operationss">
        <Link to={`/editblog/${id}`}>
          <div>
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
  );
};

export default TodoCard;
