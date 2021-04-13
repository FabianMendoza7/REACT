import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  // definir la categoría y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  // cuando haya un cambio en la categoría, se vuelve a ejecutar el componente
  useEffect(()=>{
    const consultarAPI = async() =>{
      const url = `https://newsapi.org/v2/top-headlines?country=ca&category=${categoria}&apiKey=e05f2d0a1d374c6bb2edf4325c0a7e19`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header
        titulo='Buscador de Noticias'
      ></Header>

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}  
        />

        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
