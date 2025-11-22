import articulos from "../data/articulos";
import Articulo from "../components/Articulo";
import Contenedor from "../components/Contenedor";
import { Link } from "react-router-dom";

function Catalogo() {
  return (
    <main className="main--nav" aria-label="Catálogo de Artículos">
        
      <Contenedor>
        <h1 className="text--h1">Catálogo de Artículos</h1>
         <h2 className="text--h2" id="main-section-title">Listado de articulos disponibles</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
        {articulos.map((item) => (
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