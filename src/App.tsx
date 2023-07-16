import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Tunes from "./views/Tunes";
import About from "./views/About";
import Home from "./views/Home";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main className="content">
        <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/tunes" Component={Tunes} />
          <Route path="/about" Component={About} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
