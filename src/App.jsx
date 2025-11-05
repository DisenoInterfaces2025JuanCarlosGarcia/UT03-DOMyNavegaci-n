import articulos from "./data/articulos";
import Articulo from "./Articulo";
import Contenedor from "./contenedor";
import './index.css'

function App() {
  return (
    <main>
      <h1 className="contenedor_h1">Catálogo de Artículos</h1>
      <Contenedor >
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
