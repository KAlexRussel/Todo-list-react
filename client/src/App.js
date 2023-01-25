import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodosList from "./component/todolist/TodosList";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<TodosList />} />
          <Route exact path="/blog/:id" element={<Todos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
