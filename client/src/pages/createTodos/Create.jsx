import React from "react";
// import { useState, useRef, useEffect } from "react";
import { Paper } from "@mui/material";
import { useState } from "react";
function Create() {
  const [input, setInput] = useState();
  //   const inputRef = useRef(null);

  //   useEffect(() => {
  //     inputRef.current.focus();
  //   });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="cards">
      <Paper elevation={3}>
        <>
          <h1>What's the Plan for Today?</h1>
          <input
            placeholder="Add a todo"
            // value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            // ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
        </>
      </Paper>
    </div>
  );
}

export default Create;
