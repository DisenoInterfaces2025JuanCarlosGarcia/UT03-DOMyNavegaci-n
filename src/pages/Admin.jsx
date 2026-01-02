import { useState } from "react";

/**
 * Componente de administración con un formulario de contacto.
 * 
 * @component
 * @returns {JSX.Element} Formulario de administración.
 */
function Admin() {
    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        precio: "",
        imagen: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.nombre.length < 5) {
            setError("El nombre tiene que ser mayor que 5 caracteres");
            return;
        }
        if (formData.precio === "") {
            setError("El precio es obligatorio");
            return;
        }
        const precio = Number(formData.precio);
        if (precio <= 0) {
            setError("El precio tiene que ser mayor que 0");
            return;
        }
        if (!formData.imagen.match(/^http/)) {
            setError("La imagen tiene que empezar por http");
            return;
        }
        setError("");
        console.log("Datos enviados:", formData);
        alert("Formulario enviado con éxito (ver consola)");
    };

    return (
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-10">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Panel de Administración</h1>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">


                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre del articulo</label>
                    <input
                        type="text"
                        id="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        aria-invalid={!!error}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                        minLength={5}
                    />
                </div>
                <div>
                    <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-1">Descripcion</label>
                    <textarea
                        id="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                        aria-invalid={!!error}
                        rows={3}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                    />
                </div>
                <div>
                    <label htmlFor="precio" className="block text-sm font-medium text-gray-700 mb-1">Precio del articulo</label>
                    <input
                        type="number"
                        id="precio"
                        value={formData.precio}
                        onChange={handleChange}
                        aria-invalid={!!error}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                        min={0}
                    />
                </div>
                <div>
                    <label htmlFor="imagen" className="block text-sm font-medium text-gray-700 mb-1">Imagen</label>
                    <input
                        type="text"
                        id="imagen"
                        value={formData.imagen}
                        onChange={handleChange}
                        aria-invalid={!!error}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none"
                        required
                    />
                </div>
                <div>
                    {error && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2"> {error}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-200"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default Admin;