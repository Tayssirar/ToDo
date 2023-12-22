import React from 'react';
import {BrowserRouter as Router, Routes,Route}from 'react-router-dom';
import '../src/styles/App.css';
import Login from './pages/Login';
import TodoPage from './pages/TodoPage'
import Register from './pages/Register';



export default function App() {
  return (
  <Router>
    <Routes>
      <Route path="/"  element={<Login />}/>
      <Route path="/todoPage" element={<TodoPage />}/>
      <Route path="/Register" element={<Register/>}/>
      </Routes>
  </Router>
);}

;
