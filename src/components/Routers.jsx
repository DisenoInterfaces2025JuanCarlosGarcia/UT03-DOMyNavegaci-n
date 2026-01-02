import { Route, Routes } from "react-router-dom"
import Contenedor from "./Contenedor"
import Inicio from "../pages/Inicio"
import ArticuloDescripcion from "../pages/ArticuloDescripcion.jsx"
import Home from "../pages/Home.jsx"
import Catalogo from "../pages/Catalogo.jsx"
import Admin from "../pages/Admin"

function Routers() {
    return (
        <Routes>
            <Route element={<Contenedor />}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
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
    );
}

export default Routers