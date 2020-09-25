import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

export const App = () => {
  useEffect(() => {
    fetch("/api/users")
      .then((result) => result.json()).then(res => console.log(res))
  }, []);

  return <h1>Hi</h1>;
};

export default App;
