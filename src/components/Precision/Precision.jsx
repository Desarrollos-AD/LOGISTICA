import "./Precision.scss";
import buque from "../../assets/img/buque.png";

function Precision() {
  return (
    <section>
      <div className="contenedor">
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
      </div>
      <div className="precision">
        <div className="precision__item precision__item--1">
          <h3>Planeación inteligente</h3>
        </div>
        <div className="precision__item precision__item--2">
          <h3>Ejecución ordenada</h3>
        </div>
        <div className="precision__item precision__item--3">
          <h3>Control constante</h3>
        </div>
        <div className="precision__buque">
          <img src={buque} alt="Imagen Buque" />
        </div>
      </div>
    </section>
  );
}

export default Precision;
