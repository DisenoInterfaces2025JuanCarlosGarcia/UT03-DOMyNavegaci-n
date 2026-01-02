/**
 * Componente que muestra el catálogo completo de artículos.
 * Renderiza un título, subtítulo y un grid con todos los artículos disponibles.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la página de catálogo.
 */

import articulos from "../data/articulos";
import Articulo from "../components/Articulo";
import Contenedor from "../components/Contenedor";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useState, useMemo } from "react";

function Catalogo() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrado de artículos
  const filteredArticulos = useMemo(() => {
    if (!searchTerm) {
      return articulos;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return articulos.filter((articulo) =>
      articulo.nombre.toLowerCase().includes(lowerCaseSearchTerm) ||
      articulo.descripcion.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);

  return (

    <main className="main--nav" aria-label="Catálogo de Artículos">

      <Contenedor>
        <h1 className="text--h1">Catálogo de Artículos</h1>
        <h2 className="text--h2" id="main-section-title">Listado de articulos disponibles</h2>

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Buscar artículos..."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
          {filteredArticulos.map((item) => (
            <Link key={item.id} to={`/catalogo/${item.id}`}>
              <Articulo
                nombre={item.nombre}
                precio={item.precio}
                descripcion={item.descripcion}
                imagen={item.imagen}
              />
            </Link>
          ))}
        </div>
      </Contenedor>

    </main>
  );
}

export default Catalogo