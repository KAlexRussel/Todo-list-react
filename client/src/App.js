import "./App.css";
import { useState, useEffect } from "react";
import Loading from "./component/Loading";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("");
  }, []); //[] only fire one time when the component loads
  return (
    <div className="App">
      <Loading />
    </div>
  );
}

export default App;
