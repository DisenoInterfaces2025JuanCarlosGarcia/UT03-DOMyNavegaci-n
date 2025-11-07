

function Articulo(props){
    const { nombre,precio,descripcion,imagen}=props

return(
    <article
        tabIndex="0"
        className="card"
        role="article">
            <figure className="card--img--wrap">
            <img role="img" className="card--img" src={imagen} alt={nombre} loading="lazy" />
            
        </figure>
        <header className="card--body">
            <h1>
                <strong>{nombre}</strong>
                </h1>
            <h2>{precio} €</h2>
            <p>{descripcion}</p>
        </header>
    </article>
);

}

export default Articulo;