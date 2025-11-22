import articulos from "../data/articulos";
import Articulo from "../components/Articulo";
import Contenedor from "../components/Contenedor";
import { Link } from "react-router-dom";

function App() {
  return (
    <main className="main--nav" aria-label="Catálogo de Artículos">
      
      <Contenedor >
        <h1 className="text--h1">Catálogo de Artículos</h1>
         <h2 className="text--h2" id="main-section-title">Listado de articulos disponibles</h2>
        
        <div className="grid--contenedor">
        {articulos.map((item) => (
           <Link to={`/articulo/${item.id}`} key={item.id}>
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

export default App