import { Login } from "./components/Autenticar/Login/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecuperarContraseña } from "./pages/RecuperarContraseña/RecuperarContraseña";
import { Footer } from "./components/Footer/Footer";
import { DataContext } from "./context/DataContext";
import { Header } from "./components/Header/Header";
import { Ayuda } from "./pages/Ayuda";
import { Carrito } from "./pages/Carrito";
import { Contacto } from "./pages/Contacto";
import { Destacados } from "./pages/Destacados";
import { Favoritos } from "./pages/Favoritos";
import NavComp from "./components/Nav/NavComp";
import Productos from "./components/Productos/Productos";
import Carrousel from "./components/Carrousel/Carrousel";
import { Inicio } from "./pages/Inicio";
import { Administracion } from "./pages/Administracion/Administracion";

function App() {
  return (
    <>
    <DataContext>
      <BrowserRouter>
        <Header/>
        <NavComp>
          <Login/>
        </NavComp>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/Administracion" element={<Administracion/>}/>
          <Route path="/Productos" element={<Productos/>}/>
          <Route path="/Contacto" element={<Contacto/>}/>
          <Route path="/RecuperarContraseña" element={<RecuperarContraseña/>}/>
          <Route path="/Carrito" element={<Carrito/>}></Route>
          <Route path="/Ayuda" element={<Ayuda/>}></Route>
          <Route path="/Destacados" element={<Destacados/>}></Route>
          <Route path="/Contacto" element={<Contacto/>}></Route>
          <Route path="/Favoritos" element={<Favoritos/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </DataContext>
    </>
  )
}

export default App