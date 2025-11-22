import { useParams, Link } from "react-router-dom";
import articulos from "../data/articulos";

function ArticuloDescripcion() {
    const { idArticulo } = useParams();

    // Buscar el artículo por id
    const articulo = articulos.find(a => a.id === Number(idArticulo));

    // Si no existe, mostrar error
    if (!articulo) {
        return (
            <div className="max-w-3xl mx-auto mt-10 p-6 bg-red-50 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-red-600 mb-4">Artículo no encontrado</h1>
                <Link
                    to="/catalogo"
                    className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                    Volver al catálogo
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
            <Link
                to="/catalogo"
                className="inline-block mb-4 px-4 py-2 [background-color:rgba(226,185,59,1)] text-gray-700 rounded-lg shadow hover:[background-color:rgba(200,160,50,1)] transition"
            >
                Volver
            </Link>
            
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">{articulo.nombre}</h1>
            
            <img 
                src={articulo.imagen}
                alt={articulo.nombre}
                className="mx-auto rounded-xl shadow-lg object-cover max-w-full max-h-[500px] h-auto mb-6"
            />

            <p className="text-gray-700 text-lg leading-relaxed mb-6 whitespace-pre-line">
                {articulo.descripcion}
            </p>

            <p className="text-2xl font-semibold text-gray-900 text-center">
                Precio: <span className="text-yellow-600">{articulo.precio} €</span>
            </p>
        </div>
    );
}

export default ArticuloDescripcion;
