import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

// crear el context
export const ModalContext = createContext();

const ModalProvider = (props) => {
    return ( 
        <ModalContext.Provider>
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;