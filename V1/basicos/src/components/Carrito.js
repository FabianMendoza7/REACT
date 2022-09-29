import React from 'react';
import Product from './Product';
import './Carrito.css';

const Carrito = ({carrito, agregarProducto}) => (
    <div className="carrito">
        <h2>Tu carrito de compras</h2>
        {
            carrito.length === 0 
            ? 
                <p>No hay ítems en el carrito</p>
            : 
                carrito.map(producto => (
                    <Product
                        key={producto.id}
                        producto={producto}
                        carrito={carrito}
                        agregarProducto={agregarProducto}
                    />                
                ))
        }
    </div>
);
 
export default Carrito;