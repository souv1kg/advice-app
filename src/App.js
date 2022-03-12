import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState({ advice: "" });

  useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = () => {
    //The random api updates once every 5 seconds. Instead, we can call the API using the api id and set its randomness.
    const id = Math.floor(Math.random() * 100) - 1;
    axios
      .get(`https://api.adviceslip.com/advice/${id}`)
      .then((res) => {
        const { advice } = res.data.slip;
        setState({ advice });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{state.advice}</h1>
        <button className="button" onClick={getAdvice}>
          <span>Give me advice!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
