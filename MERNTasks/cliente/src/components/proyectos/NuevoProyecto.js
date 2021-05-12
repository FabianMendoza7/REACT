import React, {Fragment, useState, useContext} from "react";
import ProyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(ProyectoContext);
    const {formulario, mostrarFormulario, agregarProyecto} = proyectosContext;

    // State para Proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    // Extraer datos del proyecto
    const {nombre} = proyecto;

    // Lee los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        });
    }

    // Cuando el usuario envía un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        // Validar el proyecto
        if(nombre === '') {
            return;
        }

        // Agregar al state
        agregarProyecto(proyecto);

        // Reiniciar el formulario
        guardarProyecto({
            nombre: ''
        });
    }

    // Mostrar el formulario. 
    // 1st method
    const onClickFormulario = () => {
        mostrarFormulario();
    }

    // 2do method: en el button: onClick={() => mostrarFormulario()}

    return (
        <Fragment>
            <button 
                type="button" 
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}>
                Nuevo Proyecto
            </button>

            {
                formulario ?
                    (
                        <form 
                            className="formulario-nuevo-proyecto"
                            onSubmit={onSubmitProyecto}>
                            <input 
                                type="text"
                                className="input-text"
                                placeholder="Nombre Proyecto"
                                name="nombre"
                                value={nombre}
                                onChange={onChangeProyecto} />
            
                            <input 
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Agregar Proyecto" />
                        </form>                        
                    ) : null
            }
        </Fragment>
    );
};

export default NuevoProyecto;
