import { NavLink, Link } from "react-router-dom";
import Header from "../components/layouts/Header/Header";
import Nav from "../components/Nav/Nav";
import Enfoque from "../components/Enfoque/Enfoque";
import Precision from "../components/Precision/Precision";
import Operaciones from "../components/Operaciones/Operaciones";

function Inicio() {
  return (
    <>
      <main className="contenedor">
        <section className="hero__shape">
          <Nav />
          <div className="hero__shape--contenido">
            <h1>Logística Portuaria Directa</h1>
            <div className="hero__shape--descripcion">
              <h3>
                Soluciones Logísticas Integrales para tu Cadena de Suministro.
              </h3>
              <p>
                Optimizamos el transporte, la logística y la administración de
                rutas terrestres y marítimas mediante asesoría especializada,
                cumplimiento normativo y gestión eficiente de operaciones.
              </p>
            </div>

            <div className="hero__shape--contacto">
              <div className="contenedor">
                <h4>Solicita una asesoría</h4>
                <div className="btns__header">
                  <Link to="/contacto" className="btn__primario">
                    Contáctenos hoy
                  </Link>
                  <Link to="/servicios" className="btn__terciario">
                    Servicios
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Enfoque />
      </main>

      <Precision />

      <Operaciones />
    </>
  );
}

export default Inicio;
