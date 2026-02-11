import "./Enfoque.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Enfoque() {
  return (
    <>
      <section className="enfoque">
        <div className="enfoque__servicios">
          <div className="enfoque__servicios--item">
            <div className="enfoque__titulos">
              <h3>
                <span>01</span>
              </h3>
              <h3 className="enfoque__titulos--centro">
                SERVICIOS DE ASESORÍA FINANCIERA Y ADMINISTRACIÓN DE TRANSPORTE
              </h3>
            </div>
            <div className="enfoque__info">
              <p>Transporte Terrestre y de Pasajeros </p>
              <FontAwesomeIcon className="icono" icon={faPlane} />
            </div>
          </div>
          <div className="enfoque__servicios--item">
            <div className="enfoque__titulos">
              <h3>
                <span>02</span>
              </h3>
              <h3 className="enfoque__titulos--centro">
                SERVICIOS DE ASESORÍA FINANCIERA Y ADMINISTRACIÓN DE TRANSPORTE
              </h3>
            </div>
            <div className="enfoque__info">
              <p>Transporte Terrestre y de Pasajeros</p>
              <FontAwesomeIcon className="icono" icon={faPlane} />
            </div>
          </div>
          <div className="enfoque__servicios--item">
            <div className="enfoque__titulos">
              <h3>
                <span>03</span>
              </h3>
              <h3 className="enfoque__titulos--centro">
                SERVICIOS DE LOGÍSTICA INTEGRAL
              </h3>
            </div>
            <div className="enfoque__info">
              <p>Logística, maniobras terrestres, aéreas y marítimas</p>
              <FontAwesomeIcon className="icono" icon={faPlane} />
            </div>
          </div>
          <div className="enfoque__servicios--item">
            <div className="enfoque__titulos">
              <h3>
                <span>04</span>
              </h3>
              <h3 className="enfoque__titulos--centro">
                GESTIÓN DE TRÁMITES Y CUMPLIMIENTO NORMATIVO
              </h3>
            </div>
            <div className="enfoque__info">
              <p>
                Gestión de permisos ante dependencias del sector comercial y
                regulaciones no arancelarias
              </p>
              <FontAwesomeIcon className="icono" icon={faPlane} />
            </div>
          </div>
          <div className="enfoque__servicios--item">
            <div className="enfoque__titulos">
              <h3>
                <span>05</span>
              </h3>
              <h3 className="enfoque__titulos--centro">
                MANEJO, EMPAQUE Y EMBALAJE DE MERCANCÍAS
              </h3>
            </div>
            <div className="enfoque__info">
              <p>Servicios Especializados</p>
              <FontAwesomeIcon className="icono" icon={faPlane} />
            </div>
          </div>
          <div className="enfoque__servicios--item">
            <div className="enfoque__titulos">
              <h3>
                <span>06</span>
              </h3>
              <h3 className="enfoque__titulos--centro">
                ASESORÍA EN CARGAS ESPECIALIZADAS
              </h3>
            </div>
            <div className="enfoque__info">
              <p>
                Cargas dimensionadas, refrigerada, consolidada u especializada
              </p>
              <FontAwesomeIcon className="icono" icon={faPlane} />
            </div>
          </div>
        </div>

        <div className="enfoque__items">
          <h2>Nuestro Enfoque</h2>
          <p>
            En Logística Portuaria Directa trabajamos bajo un enfoque integral
            que garantiza eficiencia operativa, seguridad y cumplimiento en cada
            etapa de la cadena logística. Nuestro objetivo es que cada operación
            se ejecute con precisión, transparencia y respaldo estratégico.
          </p>
          <ul>
            <li>Cumplimiento normativo y regulatorio</li>
            <li> Optimización de costos y rutas</li>
            <li> Seguridad y control de mercancía</li>
            <li>Acompañamiento estratégico continuo</li>
          </ul>
          <div className="btn">
            <Link to="/contacto" className="btn__primario">
              Acerca de nosotros
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}

export default Enfoque;
