import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Info from './components/Info';
import Cancion from './components/Cancion';
import axios from 'axios';

function App() {
  // definir el state
  const [busquedaLetra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState('');
  const [info, guardarInfo] = useState('');

  useEffect(() => {
    if(Object.keys(busquedaLetra).length === 0)
    {
      return;
    }

    const consultarApiLetra = async()=>{
      const {artista, cancion} = busquedaLetra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      // invoke both APIs at the same time
      const [letra, informacion] = await Promise.all([
        axios(url),
        axios(url2)
      ]);

      guardarLetra(letra.data.lyrics);
      guardarInfo(informacion.data.artists[0]);
    }

    consultarApiLetra();
  }, [busquedaLetra, info]);

  return (
    <Fragment>
      <Formulario
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info
              info={info}
            />
          </div>
          <div className="col-md-6">
            <Cancion 
              letra={letra}
            />
          </div>          
        </div>
      </div>
    </Fragment>
  );
}

export default App;
