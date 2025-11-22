/**
 * Componente principal de la aplicación.
 * Configura las rutas de la aplicación usando react-router-dom
 * y renderiza el header y footer comunes en todas las páginas.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX con la estructura principal de la app.
 */

import { Route, Routes } from "react-router-dom"
import articulos from "./data/articulos.js"
import Articulo from "./components/Articulo"
import Contenedor from "./components/Contenedor"
import './assets/styles/index.css'
import Inicio from "./pages/inicio"
import ArticuloDescripcion from "./pages/ArticuloDescripcion.jsx"
import Home from "./pages/Home.jsx"
import Catalogo from "./pages/Catalogo.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Header />
    {/* <main id="main-content"> */}
      <Routes>
        <Route element={<Contenedor />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/catalogo/:idArticulo" element={<ArticuloDescripcion />} />
        </Route>
        <Route
        path="*"
        element={
          <Contenedor titulo="Pagina no encontrada">
            <p> La ruta no existe.</p>
          </Contenedor>
        
        }

        />
      </Routes>
      {/* </main> */}
      <Footer />
    </>
  );
}

export default App
