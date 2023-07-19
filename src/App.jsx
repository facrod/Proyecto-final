import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavComp from "./components/Nav/NavComp";
import Categoria from "./components/Categoria/Categoria";
import Productos from "./components/Productos/Productos";
import Slider from "./components/Carousel/Carousel";
import { Children } from "react";
import Contacto from "./components/Contacto/Contacto";




function App() {

  return (
    <div>
    <BrowserRouter>
    <NavComp/>
    <Routes>
      <Route path="/" element={<Slider/>}/>
      <Route path="/Productos" element={<Productos/>}/>
      <Route path="/Contacto" element={<Contacto/>}/>
    </Routes>
    </BrowserRouter>
    </div>
)
}

export default App;