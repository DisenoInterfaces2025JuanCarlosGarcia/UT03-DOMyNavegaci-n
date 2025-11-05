

function Articulo(props){
    const { nombre,precio,descripcion,imagen}=props

return(
    <div className="card">
        <div className="card-img-wrap">
            <img className="card-img" src={imagen} alt={nombre} />
        </div>

        <div className="card-body">
            <h1>{nombre}</h1>
            <h2>{precio} €</h2>
            <p>{descripcion}</p>
        </div>
        </div>
);

}

export default Articulo;