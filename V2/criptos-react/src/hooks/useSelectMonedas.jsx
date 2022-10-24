import React from 'react'
import styled from '@emotion/styled';

const label = styled.label`
    color: #FFF;
`

const useSelectMonedas = (label) => {
    const SelectMonedas = () => (
        <>
            <label>{label}</label>
        </>
    )
    
    return [ SelectMonedas ];
}

export default useSelectMonedas