import React from "react";

const TodoCard = (props) => {
  const { todo } = props;
  const { title, completed } = todo;
  return (
    <div>
      <h4>{title}</h4>

      <h6> {`Completed: ${completed}`}</h6>
      <hr></hr>
      <br></br>
    </div>
  );
};

export default TodoCard;
