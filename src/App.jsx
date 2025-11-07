import articulos from "./data/articulos";
import Articulo from "./Articulo";
import Contenedor from "./Contenedor";
import './index.css'

function App() {
  return (
    <main className="main--nav" aria-label="Catálogo de Artículos">
      
      <Contenedor >
        <h1 className="text--h1">Catálogo de Artículos</h1>
         <h2 className="text--h2" id="main-section-title">Listado de articulos disponibles</h2>
        
        <div className="grid--contenedor">
        {articulos.map((item, index) => (
          <Articulo
            key={index}
            nombre={item.nombre}
            precio={item.precio}
            descripcion={item.descripcion}
            imagen={item.imagen}
          />
        ))}
        </div>
      </Contenedor>
    </main>
  );
}

export default App
