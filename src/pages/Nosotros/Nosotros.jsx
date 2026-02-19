import SubHeader from "../../components/layouts/SubHeader/SubHeader";
import Nav from "../../components/Nav/Nav";
import nosotros from "../../assets/img/nosotros.png";
import esencia from "../../assets/img/WE3.png";
import Valores from "../../components/Valores/Valores";
import { motion } from "framer-motion";

import "./Nosotros.scss";
import Operaciones from "../../components/Operaciones/Operaciones";

function Nosotros() {
  return (
    <>
      <Nav />
      <SubHeader
        title="Nosotros"
        subtitle="
        En Logística Portuaria Directa somos especialistas en gestión logística, asesoría operativa y coordinación de transporte terrestre y marítimo.
        Trabajamos para que cada operación fluya con orden, control y cumplimiento."
        img={nosotros}
        alt="Imagen nosotros"
      />
      <div className="contenedor">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="intercalar"
        >
          <div className="intercalar__img intercalar__img--figura">
            <img
              src={esencia}
              alt="Imagen nosotros"
              className="intercalar__img--figura--efecto"
            />
          </div>
          <div className="intercalar__conte">
            <h2>Nuestra Esencia</h2>
            <p>
              Operamos bajo principios claros. Nuestro compromiso es convertir
              la logística en una ventaja competitiva para nuestros clientes.
            </p>
            <div className="intercalar__conte--items">
              <div className="intercalar__conte--item ">
                <h3>Planeación basada en análisis</h3>
              </div>
              <div className="intercalar__conte--item ">
                <h3> Precisión en cada proceso</h3>
              </div>
              <div className="intercalar__conte--item ">
                <h3>Cumplimiento normativo riguroso</h3>
              </div>
              <div className="intercalar__conte--item ">
                <h3>Atención personalizada</h3>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Valores />

      <Operaciones />
    </>
  );
}

export default Nosotros;
