import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import AdoptPage from "./pages/AdoptPage";
import PetsPage from "./pages/PetsPage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/pets" Component={PetsPage}></Route>
        <Route path="/pets/:petId" Component={AdoptPage}></Route>
        <Route path="/adopt" Component={AdoptPage}></Route>
      </Routes>
    </Router>
  );
}

export default App;
