import { Login } from "./components/Autenticar/Login/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecuperarContraseña } from "./pages/RecuperarContraseña";



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/pages/RecuperarContraseña" element={<RecuperarContraseña/>}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
