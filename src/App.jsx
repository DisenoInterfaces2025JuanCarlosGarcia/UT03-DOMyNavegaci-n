import articulos from "./data/articulos";
import Articulo from "./components/Articulo";
import Contenedor from "./components/Contenedor";
import './index.css'

function App() {
  return (
    <>
    <Header />
    {/* <main id="main-content"> */}
      <Routes>
        <Route element={<Contenedor />}>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Navigate to="/" />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/interpretes" element={<Interpretes />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/interpretes/:idPelicula/:index" element={<InterpreteDetalle />} />
          <Route path="/peliculas/:id" element={<PeliculasDetalle />} />
        </Route>


        <Route
        path="*"
        element={
          <Contenedor titulo="Pagina no encontrada">
            <p> La ruta no existe.</p>
          </Contenedor>
        
        }

        />
      </Routes>
      {/* </main> */}
    </>
  );
}

export default App
