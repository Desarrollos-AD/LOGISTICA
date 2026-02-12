import SubHeader from "../components/layouts/SubHeader/SubHeader";
import nosotros from "../assets/img/nosotros.png";

function Nosotros() {
  return (
    <SubHeader
      title="Nosotros"
      subtitle="
        En Logística Portuaria Directa somos especialistas en gestión logística, asesoría operativa y coordinación de transporte terrestre y marítimo.
        Trabajamos para que cada operación fluya con orden, control y cumplimiento."
      img={nosotros}
      alt="Imagen nosotros"
    />
  );
}

export default Nosotros;
