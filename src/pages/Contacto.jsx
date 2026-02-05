function Contacto() {
  return (
    <>
      <div className="container-fluid text-center py-5 bg-light">
        <h2 className="fw-bold">Contacto</h2>
      </div>

      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <div className="row w-100 h4">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <div className="p-4 border rounded shadow-sm bg-white">
              <h4 className="fw-bold mb-3">¿Necesitas más información?</h4>

              <p>
                Si necesitas más información o deseas solicitar un presupuesto
                personalizado, no dudes en ponerte en contacto con nosotros.
                Estamos aquí para ofrecerte soluciones logísticas a medida y
                optimizar tus operaciones de transporte.
              </p>

              <a
                href="mailto:logisticaportuariadirecta@gmail.com"
                subject="Consulta personalizada"
                body="Me gustaría solicitar una cotización sin costo para mi proyecto relacionado con:

Servicios de logística portuaria.
Optimización de transporte.
[Especificar otros servicios requeridos].
Por favor, contáctenme para analizar mi caso de manera detallada y proporcionarme las mejores soluciones disponibles. Adjunto a este mensaje más detalles específicos sobre mi solicitud:

[Escriba aquí los detalles adicionales del proyecto o necesidades específicas]
Gracias por su atención. Espero su pronta respuesta.
Atentamente,
[Nombre del Cliente]
Teléfono: [Número de contacto]"
                className="btn btn-primary mt-3"
              >
                Escríbenos un correo{" "}
              </a>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <iframe
              title="Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941.9791656169343!2d-96.13285542433653!3d19.1988419624991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c346bf5505dea3%3A0xcc2b08984768eabe!2sXicot%C3%A9ncatl%20444%2C%20Faros%2C%2091709%20Veracruz%2C%20Ver.!5e0!3m2!1ses-419!2smx!4v1734367803000!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacto;
