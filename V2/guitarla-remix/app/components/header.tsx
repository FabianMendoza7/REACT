import { Link } from "@remix-run/react";
import logo from '../../public/img/logo.svg';
import Navigation from "./navigation.tsx";

function Header() {

  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to="/">
          <img className='logo' src={logo} alt="Imagen logo" />
        </Link>

        <Navigation />
      </div>
    </header>
  )
}

export default Header