import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear el context
// Dependiendo del proyecto, se recomienda tener el context en un lugar y las funciones en otro.
export const CategoriasContext = createContext();

// Privider es donde se encuentran las funciones y state.
const CategoriasProvider = (props) => {
    // crear el state del context
    const [categorias, guardarCategorias] = useState([]);

    // invocar la api
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categorias = await axios.get(url);

            guardarCategorias(categorias.data.drinks);
        }
        obtenerCategorias();
    }, []);

    return(
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
}

export default CategoriasProvider;