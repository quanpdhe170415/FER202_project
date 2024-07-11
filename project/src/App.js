import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext } from "react";

// import data from "./components/data.json";
import React, { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Edit from "./components/Edit";

import Body from "./components/Body";
import MovieDetail from "./components/MovieDetail";
import Update from './components/update'
export const UserContent = createContext();

function App() {
  const [user, setUser] = useState({});
  return (
    <UserContent.Provider value={{ setUser, user }}>
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/:id" element={<Body />} />
          <Route path="/" element={<Body />} />
          <Route path="/movie-detail/:id" element={<MovieDetail />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />} /> 
          <Route path="/edit" element={<Edit />} /> 
          <Route path="/edit2/:id" element={<Update/>} /> hsưaf
        </Routes>

      </div>
    </Router>
    </UserContent.Provider>
  );
}

export default App;