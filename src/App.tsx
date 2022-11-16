import React from "react";
import logo from "./logo.svg";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

  // return (
  //   fetch('https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1,key2,key3')
  // );
}

// export default App;
