import { NavLink, Link } from "react-router-dom";
import "./Nav.scss";
import logo from "../../assets/img/logo.png";

function Nav() {
  return (
    <div className="barra_header">
      <div className="contenedor">
        <nav className="navbar">
          <div className=" navbar__logo ">
            <NavLink to="/" className="">
              <img
                src={logo}
                alt="Logo de la empresa"
                width="400"
                height="400"
                loading="eager"
              />
            </NavLink>
          </div>
          <ul className="navbar__nav">
            <li className="navbar__nav--item">
              <NavLink to="/" className="nav__link">
                Inicio
              </NavLink>
            </li>
            <li className="navbar__nav--item">
              <NavLink to="/servicios" className="nav__link">
                Servicios
              </NavLink>
            </li>
            <li className="navbar__nav--item">
              <NavLink to="/nosotros" className="nav__link">
                Nosotros
              </NavLink>
            </li>
            <li className="navbar__nav--item">
              <NavLink to="/contacto" className="nav__link">
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
