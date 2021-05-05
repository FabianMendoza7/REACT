import React, {Fragment} from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasProyecto = [
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Colores', estado: false},
        {nombre: 'Elegir ...', estado: false},
        {nombre: 'Elegir otro...', estado: true}
    ];

    return ( 
        <Fragment>
            <h2>Proyecto: Tienda Virtual</h2>

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

