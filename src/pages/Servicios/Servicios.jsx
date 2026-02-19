import SubHeader from "../../components/layouts/SubHeader/SubHeader";
import Nav from "../../components/Nav/Nav";
import serviciosImg from "../../assets/img/servicios.png";
import servicios from "../../data/Servicios.json";
import "./Servicios.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShip } from "@fortawesome/free-solid-svg-icons";
import Precision from "../../components/Precision/Precision";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Servicios() {
   const location = useLocation();

   useEffect(() => {
     if (location.hash) {
       const element = document.querySelector(location.hash);
       if (element) {
         element.scrollIntoView({ behavior: "smooth" });
       }
     }
   }, [location]);
  return (
    <>
      <Nav />
      <SubHeader
        title="Servicios"
        subtitle="
              En Logística Portuaria Directa somos especialistas en gestión logística, asesoría operativa y coordinación de transporte terrestre y marítimo.
              Trabajamos para que cada operación fluya con orden, control y cumplimiento."
        img={serviciosImg}
        alt="Imagen Servicios"
        className="img__degradado"
      />
      <main className="servicios">
        <div className="contenedor">
          <div>
            {servicios.map((servicio) => (
              <motion.section
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                id={servicio.url}
                className="enfoque__servicios--item"
                key={servicio.id}
              >
                <div className="enfoque__titulos">
                  <h3 className="">
                    <span>0{servicio.id}</span>
                  </h3>
                  <h3 className="enfoque__titulos--centro">
                    {servicio.titulo}
                  </h3>
                </div>

                <div className="enfoque__info">
                  <p>{servicio.descripcion}</p>
                </div>

                <div className="cards">
                  {servicio.cards.map((card) => (
                    <motion.div
                      className="cards__items"
                      whileHover={{
                        y: -12,
                        boxShadow: "0px 25px 50px rgba(0,0,0,0.2)",
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                      key={card.id}
                    >
                      <h4>{card.titulo}</h4>

                      <div className="cards__items--item" key={card.id}>
                        {card.items.map((item, index) => (
                          <div key={index}>
                            <div className="cards__items--item--icono">
                              <FontAwesomeIcon
                                className="icono"
                                icon={faShip}
                              />
                              <p>{item}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </main>

      <section className="soluciones">
        <div className="contenedor">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="soluciones__contenido"
          >
            <div className="contenedor">
              <h2>Soluciones en materia logística</h2>
              <p>
                Logística Portuaria Directa es una empresa especializada en
                ofrecer soluciones logísticas integrales para optimizar las
                operaciones terrestres, aéreas y marítimas de nuestros clientes.
                Nuestros servicios están diseñados para garantizar un flujo
                eficiente y seguro de mercancías, cumpliendo con los más altos
                estándares de calidad y regulaciones del sector.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Precision />
    </>
  );
}

export default Servicios;
