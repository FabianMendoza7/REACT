import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

const App = () => {

  // Citas en el localStorage.
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }

  // Arregla de citas.
  const [citas, guardarCitas] = useState(citasIniciales);

  // Realizar ciertas operaciones cuando el State cambia.
  useEffect( () => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasIniciales]);

  // Toma las citas actuales y agrega la nueva.
  const crearCita = (cita) => {
    guardarCitas([
      ...citas,
      cita
    ])
  };

  // Elimina una cita por su id.
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  // Mensaje condicional.
  const titulo = citas.length == 0 ? 'No hay citas' : 'Administra tus Citas';

  return (
    <Fragment>
      <h1>Adminsitrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {
              citas.map(cita => (
                <Cita
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
