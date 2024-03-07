import styles from "~/styles/carrito.css"

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export function meta(){
  return {
    title: 'GuitarLA - Carrito de Compras',
    description: 'Venta de guitarras, música, blog, carrito de compras, tienda'
  }
}

export default function Carrito() {
  return (
    <main className="contenedor">
      <h1 className="heading">
        Carrito de Compras

        <div className="contenido">
          <div className='carrito'>
            <h2>Artículos</h2>
          </div>
        </div>

        <aside className="resumen">
          <h3>Resumen del Pedido</h3>
          <p>Total a pagar: $</p>
        </aside>
      </h1>
    </main>
  )
}
