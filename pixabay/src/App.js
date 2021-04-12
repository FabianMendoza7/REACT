import react, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';

function App() {

  // state de la app
  const [busqueda, guardarBusqueda] = useState('');

  // cuando la búsqueda cambia
  useEffect(() => {
    const consultarApi = async () => {
      if(busqueda === ''){
        return;
      }

      const imagenesPorPagina = 30;
      const key = '21115729-2babab061298f9a8efbc8f425';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarBusqueda(resultado.hits);
    }
    consultarApi();
  }, [busqueda]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>

        <Formulario
          guardarBusqueda={guardarBusqueda}
        />
      </div>
    </div>
  );
}

export default App;
