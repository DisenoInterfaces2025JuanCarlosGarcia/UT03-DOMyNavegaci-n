
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {

  // Estado del menú: abierto o cerrado
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Botón hamburguesa */}
      <nav className="relative p-4 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg rounded-lg">

        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-white">
            Películas
          </h1>
          <img src="" alt="" />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Abrir o cerrar menú de navegación"
            aria-expanded={open}
            aria-controls="menu-principal"
            className="text-3xl text-white p-2"
          >
            ☰
          </button>

          {/* Menú controlado por el estado */}
          <nav className={open ? "block" : "hidden"}>
            <NavLink to="/inicio" onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-gray-700 transition">Inicio</NavLink>
            <NavLink to="/catalogo" onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-gray-700 transition">Catalogo</NavLink>
            {/* <NavLink to="/articuloDescripcion" onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-gray-700 transition">ArticuloDescripcion</NavLink> */}
            <NavLink to="/home" onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-gray-700 transition">Home</NavLink>
          </nav>
        </div>
      </nav>
    </>
  );
}

export default Nav;