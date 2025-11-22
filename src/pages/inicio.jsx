/**
 * Componente de la página de inicio.
 * Muestra una imagen principal y un grid con algunos artículos destacados.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la página de inicio.
 */

import articulos from "../data/articulos";
import Articulo from "../components/Articulo";
import Contenedor from "../components/Contenedor";
import { Link } from "react-router-dom";
import ImgPrincipal from '../assets/img/Image Background.png';
import imgMuestra1 from '../assets/img/MSI Aegis ZS.png';
import imgMuestra2 from '../assets/img/Acer Nitro 27.png';
import imgMuestra3 from '../assets/img/CyberPowerPC.png';
import imgMuestra4 from '../assets/img/Sceptre Monitor curvo.png';

function Inicio() {
    return (
        <main>

            <Contenedor>
                {/* Imagen principal */}
                <img
                    src={ImgPrincipal}
                    alt="Imagen principal de la página de inicio"
                    className="w-full h-auto object-cover mb-8"
                />

                {/* Grid de imágenes centrado */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mx-auto">
                    <Link to="/catalogo/14">
                        <Articulo
                            nombre="MSI Aegis ZS"
                            precio="1500€"
                            descripcion="PC Gaming potente con gráfica RTX 3080"
                            imagen={imgMuestra1}
                        />
                    </Link>
                    <Link to="/catalogo/5">
                        <Articulo
                            nombre="Acer Nitro 27"
                            precio="300€"
                            descripcion="Monitor curvo 27'' Full HD"
                            imagen={imgMuestra2}
                        />
                    </Link>
                    <Link to="/catalogo/10">
                        <Articulo
                            nombre="CyberPowerPC"
                            precio="1200€"
                            descripcion="PC Gaming compacto con Ryzen 7"
                            imagen={imgMuestra3}
                        />
                    </Link>
                    <Link to="/catalogo/20">
                        <Articulo
                            nombre="Sceptre Monitor curvo"
                            precio="1200€"
                            descripcion="PC Gaming compacto con Ryzen 7"
                            imagen={imgMuestra4}
                        />
                    </Link>
                </div>
            </Contenedor>
        </main>
    );
}

export default Inicio