import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Nav.scss";
import logo from "../../assets/img/logo.png";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="barra_header">
      <div className="contenedor">
        <nav className="navbar">
          {/* Logo */}
          <div className="navbar__logo">
            <NavLink to="/" onClick={closeMenu}>
                <img src={logo} alt={logo} />
            </NavLink>
          </div>

          {/* Botón Hamburguesa */}
          <button
            className={`navbar__toggle ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Links */}
          <ul className={`navbar__nav ${menuOpen ? "open" : ""}`}>
            <li>
              <NavLink to="/" className="nav__link" onClick={closeMenu}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/servicios"
                className="nav__link"
                onClick={closeMenu}
              >
                Servicios
              </NavLink>
            </li>
            <li>
              <NavLink to="/nosotros" className="nav__link" onClick={closeMenu}>
                Nosotros
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" className="nav__link" onClick={closeMenu}>
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
