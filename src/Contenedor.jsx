



function Contenedor({children}) {
    return(
        <section aria-labelledby="main-section-title" className="w-full max-w7xl text-center">
            <h1 className="text--h2" id="main-section-title">Listado de articulos disponibles:</h1>
            <div className="Contenedor">{children}</div>
            
        </section>
        
    )

}

export default Contenedor;