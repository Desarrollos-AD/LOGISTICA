function Nosotros() {
  return (
    <div className="container-fluid main-content mt-5 pt-1">
      <section id="mision-vision" className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="bloque">
                <h2>Misión de Logística</h2>

                <p>
                  En Logística portuaria Nuestra misión es proporcionar
                  soluciones logísticas innovadoras y personalizadas que
                  impulsen la eficiencia, seguridad y sostenibilidad en las
                  cadenas de suministro de nuestros clientes. Nos enfocamos en
                  optimizar cada etapa del proceso logístico mediante un
                  servicio integral que combine tecnología avanzada, experiencia
                  profesional y un compromiso constante con la calidad
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="bloque">
                <h2>Visión de Logística</h2>

                <p>
                  Ser líderes reconocidos en el sector logístico a nivel
                  nacional e internacional, destacándonos por nuestra capacidad
                  de adaptación a las necesidades cambiantes del mercado y por
                  establecer estándares de excelencia en la gestión de
                  operaciones terrestres, marítimas y aéreas. Aspiramos a ser el
                  socio estratégico de confianza para empresas que buscan
                  soluciones logísticas de clase mundial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="galeria-servicios" className="py-5">
        <div className="container-fluid px-1">
          <div className="row gx-1">
            <div className="col-6 col-md-3" id="img-servicio-1">
              <img
                src="images/Nosotros%201.png"
                alt="Servicio 1"
                className="img-fluid w-100"
              />

              <h6>Eficiencia</h6>
            </div>

            <div className="col-6 col-md-3" id="img-servicio-2">
              <img
                src="images/Nosotros%202.png"
                alt="Servicio 2"
                className="img-fluid w-100"
              />

              <h6>Innovación</h6>
            </div>

            <div className="col-6 col-md-3" id="img-servicio-3">
              <img
                src="images/Nosotros%203.png"
                alt="Servicio 3"
                className="img-fluid w-100"
              />

              <h6>Compromiso</h6>
            </div>

            <div className="col-md-3 col-6 text-center">
              <h6>
                <strong>Descubre por que somos los mejores </strong>
              </h6>

              <p>Solida experiencia en soluciones.</p>

              <a href="servicios.html" className="btn btn-primary">
                Nuestros Servicios
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nosotros;
