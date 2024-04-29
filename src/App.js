import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Netflix from "./pages/Netflix";
import ConnectPage from './pages/ConnectPage';
import IntegrationPage from './pages/IntegrationPage';

function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route exact path="/login" element={<Login />} />
  <Route exact path="/signup" element={<Register />} />
  <Route exact path="/connect" element={<ConnectPage />} />
  <Route exact path="/" element={<Netflix />} />
  <Route exact path="/netflix-project" element={<Netflix />} />
  <Route exact path="/Delete" element={<IntegrationPage />} />
  
</Routes>


    </BrowserRouter>
  );
}

export default App;
