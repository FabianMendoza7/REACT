import React, {Fragment, useContext} from 'react';
import Tarea from './Tarea';
import ProyectoContext from '../../context/proyectos/proyectoContext';

const ListadoTareas = () => {

    // extraer proyectos de state inicial
    const proyectosContext = useContext(ProyectoContext);
    const {proyecto} = proyectosContext;    

    // Array destroctoring para extraer el proyecto actual
    const {proyectoActual} = proyecto;

    const tareasProyecto = [
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Colores', estado: false},
        {nombre: 'Elegir ...', estado: false},
        {nombre: 'Elegir otro...', estado: true}
    ];

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual}</h2>

            <ul>
                {
                    tareasProyecto.length === 0
                        ? (<li className="tarea"><p>No hay tareas</p></li>)
                        : tareasProyecto.map(tarea => (
                            <Tarea 
                                tarea={tarea}
                            />
                        ))
                }
                <button
                    type="button"
                    className="btn btn-eliminar">
                    Eliminar Proyecto &times;
                </button>                
            </ul>
        </Fragment>
     );
}
 
export default ListadoTareas;

