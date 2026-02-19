import "./Enfoque.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";

import servicios from "../../data/Servicios.json";

function Enfoque() {
  return (
    <>
      <section className="enfoque">
        <div className="enfoque__servicios">
          {servicios.map((servicio) => (
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="enfoque__servicios--item"
            >
              <div className="enfoque__titulos">
                <h3>
                  <span>0{servicio.id}</span>
                </h3>
                <h3 className="enfoque__titulos--centro">{servicio.titulo}</h3>
              </div>
              <div className="enfoque__info">
                <p>{servicio.descripcion}</p>
                <NavLink to={`/servicios#${servicio.url}`}>
                  <FontAwesomeIcon className="icono" icon={faPlane} />
                </NavLink>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="enfoque__items"
        >
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
        </motion.div>
      </section>
    </>
  );
}

export default Enfoque;
