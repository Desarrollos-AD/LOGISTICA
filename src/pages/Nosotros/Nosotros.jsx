import SubHeader from "../../components/layouts/SubHeader/SubHeader";
import nosotros from "../../assets/img/nosotros.png";
import esencia from "../../assets/img/WE3.png";
import Valores from "../../components/Valores/Valores";

import "./Nosotros.scss";

function Nosotros() {
  return (
    <>
      <SubHeader
        title="Nosotros"
        subtitle="
        En Logística Portuaria Directa somos especialistas en gestión logística, asesoría operativa y coordinación de transporte terrestre y marítimo.
        Trabajamos para que cada operación fluya con orden, control y cumplimiento."
        img={nosotros}
        alt="Imagen nosotros"
      />
      <div className="contenedor">
        <div className="intercalar">
          <div className="intercalar__img intercalar__img--figura">
            <img
              className="intercalar__img--figura--efecto"
              src={esencia}
              alt="Imagen nosotros"
              loading="lazy"
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
        </div>
      </div>

      <Valores/>
    </>
  );
}

export default Nosotros;
