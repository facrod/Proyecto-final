import { Login } from "./components/Autenticar/Login/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecuperarContraseña } from "./pages/RecuperarContraseña";
import { Footer } from "./components/Footer/Footer";
import { DataContext } from "./context/DataContext";

import { Ayuda } from "./pages/Ayuda";
import { Carrito } from "./pages/Carrito";
import { Contacto } from "./pages/Contacto";
import { Destacados } from "./pages/Destacados";
import { Favoritos } from "./pages/Favoritos";


function App() {
  return (
    <>
    <DataContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/pages/RecuperarContraseña" element={<RecuperarContraseña/>}/>
          <Route path="/pages/Carrito" element={<Carrito/>}></Route>
          <Route path="/pages/Ayuda" element={<Ayuda/>}></Route>
          <Route path="/pages/Destacados" element={<Destacados/>}></Route>
          <Route path="/pages/Contacto" element={<Contacto/>}></Route>
          <Route path="/pages/Favoritos" element={<Favoritos/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </DataContext>
    </>
  )
}

export default App
