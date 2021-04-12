import react, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {

  // state de la app
  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaActual, guardarPaginaActual] = useState(1);
  const [totalPaginas, guardarTotalPaginas] = useState(1);

  // cuando la búsqueda cambia o la página actual, se vuelve a ejecutar la consulta hacia la API
  useEffect(() => {
    const consultarApi = async () => {
      if(busqueda === ''){
        return;
      }

      const imagenesPorPagina = 30;
      const key = '21115729-2babab061298f9a8efbc8f425';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarImagenes(resultado.hits);

      // calcular total páginas
      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
      guardarTotalPaginas(calcularTotalPaginas);

      // mover la pantalla hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior: 'smooth'});
    }
    consultarApi();
  }, [busqueda, paginaActual]);

  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;

    if(nuevaPaginaActual === 0){
      return;
    }

    guardarPaginaActual(nuevaPaginaActual);
  }

  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1;

    if(nuevaPaginaActual > totalPaginas){
      return;
    }

    guardarPaginaActual(nuevaPaginaActual);
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>

        <Formulario
          guardarBusqueda={guardarBusqueda}
        />
      </div>

      <div className="row justify-content-center">
        <ListadoImagenes 
          imagenes={imagenes}
        />

        {paginaActual === 1 ? null :
          (
            <button
            type="button"
            className="bbtn btn-info mr-1"
            onClick={paginaAnterior}
            >
              &laquo; Anterior
            </button>
          )
        }
        {paginaActual === totalPaginas ? null :
          (
            <button
            type="button"
            className="bbtn btn-info mr-1"
            onClick={paginaSiguiente}
            >
              Siguiente &raquo;
            </button>  
            )
        }      
      </div>
    </div>
  );
}

export default App;
