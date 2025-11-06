import articulos from "./data/articulos";
import Articulo from "./Articulo";
import Contenedor from "./Contenedor";
import './index.css'

function App() {
  return (
    <main>
      
      <Contenedor >
        <h1 className="contenedor_h1">Catálogo de Artículos</h1>
        <p className="text_h2">
        Listado de articulos disponibles:
      </p>
        <div className="grid-contenedor">
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
