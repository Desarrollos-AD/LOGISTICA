import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Servicios from "../pages/Servicios/Servicios";
import Nosotros from "../pages/Nosotros/Nosotros";
import Contacto from "../pages/Contacto/Contacto";
import Terminos from "../pages/Terminos";
import ScrollToTop from "../components/Hook/ScrollToTop";

function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/terminos" element={<Terminos />} />
      </Routes>
    </>
  );
}

export default AppRouter;
