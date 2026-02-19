import "./Precision.scss";
import buque from "../../assets/img/buque.png";
import { motion } from "framer-motion";
function Precision() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1], // easing tipo Apple
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="contenedor"
      >
        <div className="precision__info">
          <h2>Precisión en cada etapa</h2>
          <p>
            Desde la planeación hasta la ejecución, cuidamos cada detalle para
            que la operación fluya sin fricciones.
          </p>
          <p>
            Nada se deja al azar: rutas, tiempos y controles trabajan en
            conjunto.
          </p>
        </div>
      </motion.div>


      <div className="precision">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1], // easing tipo Apple
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="precision__item precision__item--1"
        >
          <h3>Planeación inteligente</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1], // easing tipo Apple
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="precision__item precision__item--2"
        >
          <h3>Ejecución ordenada</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1], // easing tipo Apple
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="precision__item precision__item--3"
        >
          <h3>Control constante</h3>
        </motion.div>
        <div className="precision__buque">
          <img src={buque} alt="Imagen Buque" />
        </div>
      </div>
    </section>
  );
}

export default Precision;


       