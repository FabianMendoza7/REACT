import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Carrito from "./components/Carrito";

function App() {
  // Crear listado productos
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Camisa ReactJS", precio: 50 },
    { id: 2, nombre: "Camisa VueJS", precio: 40 },
    { id: 3, nombre: "Camisa NodeJS", precio: 60 },
  ]);

  // State for shoping car
  const [carrito, agregarProducto] = useState([]);

  // Obtener fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header
        titulo="Tienda Virtual"
      />
      <h1>Lista de Productos</h1>
      {productos.map((producto) => (
        <Product
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}          
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito
        carrito={carrito} 
        agregarProducto={agregarProducto}
      />
      <Footer
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
