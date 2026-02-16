import "./Operaciones.scss";
import grua from "../../assets/img/grua.png";
function Operaciones() {
  return (
    <div className="contenedor">
      <div className="rutas">
        <div className="contenedor">
          <h2>Diseñamos rutas, no improvisamos</h2>

          <p>
            Cada trayecto tiene una razón. Analizamos variables, anticipamos
            escenarios y trazamos rutas que reducen riesgos y mejoran
            resultados.
          </p>
          <p>Un buen camino no es el más corto, es el más eficiente.</p>

          <p>
            La logística exige precisión diaria. Nuestro enfoque está basado en
            disciplina operativa, seguimiento continuo y decisiones bien
            fundamentadas.
          </p>
          <p>Cuando el control es claro, la confianza es natura</p>
        </div>
      </div>

      <section className="intercalar">
        <div className="intercalar__img">
          <img src={grua} alt="Imagen Grúa" loading="lazy" />
        </div>
        <div className="intercalar__conte">
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
        </div>
      </section>
    </div>
  );
}

export default Operaciones;
