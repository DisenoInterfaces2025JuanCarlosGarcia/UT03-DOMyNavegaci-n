import { useParams, Link } from "react-router-dom";
import articulos from "../data/articulos";

function ArticuloDescripcion() {
    const { idArticulo, index } = useParams();
    const indexNum = Number(index);

    // Buscar el artículo por id
    const articulo = articulos.find(a => a.id === Number(idArticulo));

    // Si no existe, mostrar error
    if (!articulo) {
        return (
            <div className="max-w-3xl mx-auto mt-10 p-4">
                <h1 className="text-3xl font-bold text-red-600">Artículo no encontrado</h1>
                <Link
                    to="/catalogo"
                    className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow"
                >
                    Volver al catálogo
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto mt-10 p-4">
            <Link
                to="/catalogo"
                className="boton"
            >
                Volver
            </Link>

            <h1 className="text-4xl font-bold">{articulo.nombre}</h1>
            
            <img
                src={articulo.imagen}
                alt={articulo.nombre}
                className="mx-auto rounded-xl shadow-lg object-cover mt-6 max-w-full h-auto"
            />

            <p className="mt-6 text-lg text-gray-700">{articulo.descripcion}</p>

            <p className="mt-4 text-2xl font-semibold [color:rgba(0, 0, 0, 1)]">
                Precio: {articulo.precio} €
            </p>
            
        </div>
    );
}

export default ArticuloDescripcion;