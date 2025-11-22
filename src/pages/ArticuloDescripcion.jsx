import { useParams } from "react-router-dom";
import articulos from "../data/articulos";
import Contenedor from "../components/Contenedor";

function ArticuloDescripcion() {
  const { id } = useParams();
  const articulo = articulos.find(a => a.id === Number(id));

  if (!articulo) return <Contenedor titulo="Artículo no encontrado" />;

  

  return (

    
    <Contenedor titulo={articulo.nombre}>

        { <button onClick={()=> boton(-1)}> 
                Volver in
            </button>}
      <img
        src={articulo.imagen}
        alt={articulo.nombre}
        className="w-80 h-auto mx-auto rounded-lg"
      />
      <p className="mt-4">{articulo.descripcion}</p>
      <p className="mt-2 font-bold">Precio: {articulo.precio} €</p>
    </Contenedor>
  );
}

export default ArticuloDescripcion;