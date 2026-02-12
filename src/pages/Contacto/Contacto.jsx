import "../Contacto/Contacto.scss";
import Nav from "../../components/Nav/Nav";
import avion from "../../assets/img/avion.png";
import { useState } from "react";
import SubHeader from "../../components/layouts/SubHeader/SubHeader";

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple
    if (!form.nombre || !form.email || !form.mensaje) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Email inválido");
      return;
    }

    setError("");
    setEnviado(true);

    console.log("Datos enviados:", form);

    // Reset formulario
    setForm({
      nombre: "",
      email: "",
      mensaje: "",
    });
  };

  return (
    <>
      <Nav />
      <main>
        <SubHeader
          title="Contáctenos"
          subtitle=" En Logística Portuaria Directa estamos listos para diseñar una solución
              eficiente, segura y estratégica para su empresa. Permítanos
              optimizar su transporte, distribución y control de mercancías."
          img={avion}
          alt={"Imagen avion"}
        />

        <div className="opciones">
          <div className="contenedor">
            <div className="opciones__contenedor">
              <div className="opciones__contenedor--formulario">
                <div className="contenedor">
                  <h3>Contacto Directo</h3>
                  <p>
                    Si prefiere atención inmediata, puede comunicarse con
                    nosotros a través de nuestros canales directos. Estamos
                    disponibles para resolver dudas, coordinar reuniones o
                    evaluar su proyecto logístico.
                  </p>

                  {enviado && (
                    <p className="success">Mensaje enviado correctamente</p>
                  )}
                  {error && <p className="error">{error}</p>}

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form">
                      <div className="form__group">
                        <div className="form__group--item">
                          <label>Nombre</label>
                          <input
                            type="text"
                            name="nombre"
                            value={form.nombre}
                            onChange={handleChange}
                            placeholder="Tu nombre"
                          />
                        </div>

                        <div className="form__group--item">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="tu@email.com"
                          />
                        </div>
                      </div>

                      <div className="form__group--textArea">
                        <label>Mensaje</label>
                        <textarea
                          name="mensaje"
                          value={form.mensaje}
                          onChange={handleChange}
                          placeholder="Escribe tu mensaje..."
                          rows="5"
                        />
                      </div>

                      <button type="submit" className="btn__secundario">
                        Enviar Mensaje
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="opciones__contenedor--mapa">
                <div className="contenedor">
                  <h3>Ubicación</h3>
                  <p>
                    Visítenos en nuestras instalaciones y conversemos
                    personalmente sobre su operación logística. Estamos
                    preparados para atenderle, analizar sus necesidades y
                    brindarle asesoría directa para optimizar sus procesos de
                    transporte y distribución.
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4881.610808705596!2d-96.131638!3d19.198841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c346bf5505dea3%3A0xcc2b08984768eabe!2sXicot%C3%A9ncatl%20444%2C%20Faros%2C%2091709%20Veracruz%2C%20Ver.!5e1!3m2!1ses-419!2smx!4v1770850613094!5m2!1ses-419!2smx"
                    width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contacto;
