import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {
    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>Grafica</p>
            </div>

            <div className="contenido-presupuesto">
                <p>
                    <pan>Presupuesto: </pan> {formatearCantidad(presupuesto)}
                </p>
                <p>
                    <pan>Disponible: </pan> {formatearCantidad(presupuesto)}
                </p>
                <p>
                    <pan>Gastado: </pan> {formatearCantidad(presupuesto)}
                </p>
            </div>                     
        </div>
    )
}

export default ControlPresupuesto