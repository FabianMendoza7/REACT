import { useState, useReducer, useMemo, useRef, useCallback } from 'react'
import Search from './Search';
import useCharacters from '../hooks/useCharacters';

const initialState = {
    favorites: []
}

const API = 'https://rickandmortyapi.com/api/character/';

const favoriteReducer = (state, action) =>
{
    switch (action.type)
    {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        default:
            return state;
    }
}

const Characters = () =>
{
    //ANTES:const [characters, setCharacters] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState('');
    const searchInput = useRef(null);

    const characters = useCharacters(API);

    const handleClick = favorite =>
    {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
    }

    // Antes de usar useRef:
    // const handleSearch = (event) =>
    // {
    //     setSearch(event.target.value);
    // }

    // Usando useRef:
    // const handleSearch = () =>
    // {
    //     setSearch(searchInput.current.value);
    // }

    // Usando useRef and useCallback()
    const handleSearch = useCallback(() =>
    {
        setSearch(searchInput.current.value);
    }, [])

    // Antes de memoizar:
    // const filteredUsers = characters.filter((user) =>
    // {
    //     return user.name.toLowerCase().includes(search.toLowerCase());
    // })

    //Memoizando:
    const filteredUsers = useMemo(() =>
        characters.filter((user) =>
        {
            return user.name.toLowerCase().includes(search.toLowerCase());
        }),
        [characters, search]
    );

    return (
        <div className="Characters">

            {
                favorites.favorites.map(favorite => (
                    <li key={favorite.id}>
                        {favorite.name}
                    </li>
                ))
            }

            {/*
            Antes de usar useCallback()
             <div className="Search">
                <input type="text" value={search} ref={searchInput} onChange={handleSearch} />
            </div> */}

            {/* Usando useCallback() */}
            <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />

            {
                filteredUsers.map(character => (
                    <div className="item" key={character.id}>
                        <h2>{character.name}</h2>
                        <button type="button" onClick={() => handleClick(character)}>Agregar a Favoritos</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Characters