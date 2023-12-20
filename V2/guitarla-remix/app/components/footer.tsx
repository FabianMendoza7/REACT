import Navigation from "./navigation.tsx";

export default function Footer() {
  return (
    <div className="footer">
        <div className="contenedor contenido">
            <Navigation />

            <p className="copyright">Todos los derechos reservados {new Date().getFullYear()}</p>
        </div>
    </div>
  )
}
