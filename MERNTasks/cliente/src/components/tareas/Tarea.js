import React from 'react';

const Tarea = ({tarea}) => {
    return ( 
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                {
                    tarea.estado
                        ?  
                            (
                                <button
                                    type="btton"
                                    className="completo"
                                >
                                    Completo
                                </button>
                            )
                        :
                        (
                            <button
                                type="btton"
                                className="incompleto"
                            >
                                Incompleto
                            </button>
                        )                        
                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario">
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-secundario">
                    Eliminar
                </button>                
            </div>
        </li> 
    );
}
 
export default Tarea;
