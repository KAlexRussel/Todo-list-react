import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
const TodoCard = (props) => {
  const { todo } = props;
  const { id, title, completed } = todo;
  const navigate = useNavigate();
  return (
    <div className="todoCard" onClick={() => navigate(`/todos/${id}`)}>
      <p>{title}</p>
      <p> {`Completed: ${completed}`}</p>
      <p className="task1">{`Todo Number:${id}`}</p>
      <i className="fa fa-trash" aria-hidden="true"></i>
    </div>
  );
};

export default TodoCard;
