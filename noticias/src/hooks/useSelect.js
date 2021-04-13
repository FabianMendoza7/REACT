import React from 'react';

const useSelect = (stateInicial, opciones) => {

    // State del custom hook
    const [state, actualizarState] = useState('');

    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e=>actualizarState(e.target.value)}
        >
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
            
        </select>
    );

    return [state, SelectNoticias];
}

export default useSelect;