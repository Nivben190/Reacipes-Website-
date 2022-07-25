import './App.css';
import RecipesPage from './Components/Recipes/RecipesPage';
import HomePage from './Components/Home/HomePage';
// import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useEffect } from 'react';
function App() {


  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/recipes" element={<RecipesPage/>}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
