import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import ProyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {
    // extraer proyectos de state inicial
    const proyectosContext = useContext(ProyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos();
    }, []);

    // revisar si proyecto tiene contenido
    if(proyectos.length === 0) return null;
    
    return ( 
        <ul className="Listado-proyectos">
            {
                proyectos.map(proyecto => (
                    <Proyecto
                        key={proyecto.id}
                        proyecto={proyecto} 
                    />
                ))
            }
        </ul>
     );
}
 
export default ListadoProyectos;