import React from 'react'
import styled from '@emotion/styled';

const label = styled.label`
    color: #FFF;
`

const useSelectMonedas = (label, opciones) => {
    const SelectMonedas = () => (
        <>
            <label>{label}</label>
            <select>
                <option value="">Seleccione</option>
                {opciones.map(opcion => (
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.nombre}</option>  
                ))}
            </select>
        </>
    )
    
    return [ SelectMonedas ];
}

export default useSelectMonedas