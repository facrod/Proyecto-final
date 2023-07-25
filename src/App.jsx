import { Login } from "./components/Autenticar/Login/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecuperarContraseña } from "./pages/RecuperarContraseña";
import { Footer } from "./components/Footer/Footer";
import { DataContext } from "./context/DataContext";
import { Header } from "./components/Header/Header";
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
        <Header/>
        <Routes>
          <Route path="/" element={<Login/>}/>
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
