import imagen from '../../public/img/nosotros.jpg';
// import styles from '../styles/nosotros.css';

export function meta() {
  return [
    {
      title: 'GuitarLA - Sobre Nosotros',
      description: 'Venta de guitarras, blog de música'
    }
  ]
}

// export function Links(){
//   return [
//     {
//       rel: 'stylesheet',
//       href: styles
//     },
//     {
//       rel: 'preload',
//       href: imagen,
//       as: 'image'
//     }
//   ]
// }

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />

        <div>
          <p>
            Aliquam erat volutpat. Aenean vel erat volutpat, finibus diam quis, aliquam purus. Suspendisse cursus fringilla enim, vel feugiat magna. Nam ultricies ligula orci, ut bibendum metus iaculis pharetra. Fusce ac diam ut lectus scelerisque gravida. Etiam eget nisl metus. In ultricies ipsum arcu, eget luctus sapien euismod vitae. Etiam vel diam fermentum augue ullamcorper egestas. Etiam eu tortor elit. Cras maximus metus a magna maximus ultricies. Integer lobortis lorem nec felis maximus, ac dapibus lorem consectetur. Duis pellentesque lacus libero, facilisis faucibus metus commodo ac.
          </p>
          <p>
            Aliquam erat volutpat. Aenean vel erat volutpat, finibus diam quis, aliquam purus. Suspendisse cursus fringilla enim, vel feugiat magna. Nam ultricies ligula orci, ut bibendum metus iaculis pharetra. Fusce ac diam ut lectus scelerisque gravida. Etiam eget nisl metus. In ultricies ipsum arcu, eget luctus sapien euismod vitae. Etiam vel diam fermentum augue ullamcorper egestas. Etiam eu tortor elit. Cras maximus metus a magna maximus ultricies. Integer lobortis lorem nec felis maximus, ac dapibus lorem consectetur. Duis pellentesque lacus libero, facilisis faucibus metus commodo ac.
          </p>          
        </div>
      </div>
    </main>
  )
}

export default Nosotros