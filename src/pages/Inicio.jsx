// import { useEffect } from "react";

// const ScrollEffects = () => {
//   useEffect(() => {
//     // ===== Navbar cambia de color al hacer scroll =====
//     const navbar = document.querySelector(".navbar");

//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         navbar?.classList.add("scrolled");
//       } else {
//         navbar?.classList.remove("scrolled");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // ===== Animaciones fade-in con IntersectionObserver =====
//     const fadeElements = document.querySelectorAll(".fade-in");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     fadeElements.forEach((el) => observer.observe(el));

//     // ===== Limpieza (importantísimo en React) =====
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       observer.disconnect();
//     };
//   }, []);

//   return null; // No renderiza nada
// };

// // export default ScrollEffects;

import Carouser_1 from "../assets/img/carousel_1.jpg";
import Carouser_2 from "../assets/img/carousel_2.png";
import Carouser_3 from "../assets/img/carousel_3.png";
import logo from "../assets/img/logo.png";
import back_1 from "../assets/img/back_1.png";
import back_2 from "../assets/img/back_2.png";
import back_3 from "../assets/img/back_3.png";
// import Carouser_4 from "../assets/img/carousel_4.jpg";

function Inicio() {
  return (
    <div className="container-fluid main-content mt-5 pt-1">
      <div className="row g-1 py-5">
        <div className="col-md-7 col-11 p-4">
          <div
            id="carouselExample"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="text-center">
                  <h2>
                    <strong> Cada operación es única </strong>
                  </h2>
                  <p>
                    Administración de rutas terrestres para entregas eficientes.
                  </p>
                  <img
                    src={Carouser_1}
                    loading="lazy"
                    width="500"
                    height="500"
                    className="img-fluid w-100"
                    alt="Carrusel 1"
                  />
                  <a href="contacto.html" className="btn btn-primary mt-3">
                    Consulta con un experto hoy!
                  </a>
                </div>
              </div>
              <div className="carousel-item">
                <div className="text-center">
                  <h2>
                    <strong>Simplifica tu operación</strong>
                  </h2>
                  <p>Facilitación de Transporte y Trámites.</p>
                  <img
                    src={Carouser_2}
                    className="img-fluid w-100"
                    alt="Carrusel 2"
                    loading="lazy"
                    width="500"
                    height="500"
                  />
                  <a href="contacto.html" className="btn btn-primary mt-3">
                    Contacta para mas información
                  </a>
                </div>
              </div>
              <div className="carousel-item">
                <div className="text-center">
                  <h2>
                    <strong>Servicios para la Cadena de Suministro </strong>
                  </h2>
                  <p>
                    Empaque, categorización y manejo de materiales, asi como
                    asesoría en carga especializa.
                  </p>
                  <img
                    src={Carouser_3}
                    className="img-fluid w-100"
                    alt="Carrusel 3"
                    loading="lazy"
                    width="500"
                    height="500"
                  />
                  <a href="contacto.html" className="btn btn-primary mt-3">
                    Contáctenos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-5 col-25 text-center d-flex justify-content-center align-items-center py">
          <div className="logo-container p-2">
            <img
              src={logo}
              className="img-fluid"
              alt="Logo de la empresa"
              loading="lazy"
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>

      <section id="galeria-servicios" className="py-5">
        <div className="container-fluid px-1">
          <div className="row gx-1">
            <div className="col-6 col-md-3" id="img-servicio-1">
              <img
                src={back_1}
                alt="Servicio 1"
                className="img-fluid w-100"
                loading="lazy"
                width="500"
                height="500"
              />
              <h6>Servicio de Maniobras marítimas</h6>
            </div>
            <div className="col-6 col-md-3" id="img-servicio-2">
              <img
                src={back_2}
                alt="Servicio 2"
                className="img-fluid w-100"
                loading="lazy"
                width="500"
                height="500"
              />
              <h6>Logística aérea y marítima</h6>
            </div>
            <div className="col-6 col-md-3" id="img-servicio-3">
              <img
                src={back_3}
                alt="Servicio 3"
                className="img-fluid w-100"
                loading="lazy"
                width="500"
                height="500"
              />
              <h6> Almacenamiento seguro</h6>
            </div>
            <div className="col-md-3 col-6 text-center">
              <h6>Consultoría Financiera</h6>
              <p>
                Asesoría diseñada para mejorar la rentabilidad y eficiencia en
                el sector transporte.
              </p>
              <a href="contacto.html" className="btn btn-primary">
                Más información
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
