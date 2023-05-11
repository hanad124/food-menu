import Home from "./../src/components/Home/Home"
import { useContext, useState } from "react"
import CategoryContext from "./Contexts/categoryContext"
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";


function App() {
  const [menuData, setMenuData] = useState([]);

  return (
    <>
     <BrowserRouter>
      <CategoryContext.Provider value={{ menuData, setMenuData }}>  
          <Home/>
      </CategoryContext.Provider>
     </BrowserRouter>
    </>
  )
}

export default App
