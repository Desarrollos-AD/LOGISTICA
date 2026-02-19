import "./Operaciones.scss";
import grua from "../../assets/img/grua.png";
import { motion } from "framer-motion";

function Operaciones() {
  return (
    <div className="contenedor">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="rutas stagger-item "
      >
        <div className="contenedor">
          <div className="separador__texto">
            <h2>Diseñamos rutas, no improvisamos</h2>
            <p>
              Cada trayecto tiene una razón. Analizamos variables, anticipamos
              escenarios y trazamos rutas que reducen riesgos y mejoran
              resultados.
            </p>
          </div>
          <div className="separador__texto">
            <h2>
              Un buen camino no es el más corto,
              <br /> es el más eficiente.
            </h2>
            <p>
              La logística exige precisión diaria. Nuestro enfoque está basado
              en disciplina operativa, seguimiento continuo y decisiones bien
              fundamentadas.
            </p>
            <p>Cuando el control es claro, la confianza es natura</p>
          </div>
        </div>
      </motion.div>

      <section className="intercalar">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="intercalar__img"
        >
          <img src={grua} alt="Imagen Grúa" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="intercalar__conte"
        >
          <h2>Operaciones que fluyen</h2>
          <p>
            Menos fricción, más resultados. Nuestra metodología busca que cada
            operación se sienta ordenada, predecible y segura para nuestros
            clientes.
          </p>
          <div className="intercalar__conte--items">
            <div className="intercalar__conte--item ">
              <h3> Procesos claros</h3>
            </div>
            <div className="intercalar__conte--item">
              <h3> Comunicación constante</h3>
            </div>
            <div className="intercalar__conte--item">
              <h3> Respuesta oportuna</h3>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Operaciones;
