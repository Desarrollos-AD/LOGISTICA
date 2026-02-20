import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Valores.scss";
import { motion } from "framer-motion";

const VALORES = [
  {
    valor: "Responsabilidad",
    descripcion:
      "Asumimos cada operación con compromiso y seriedad, entendiendo que detrás de cada envío existe una inversión y una promesa que debe cumplirse.",
  },
  {
    valor: "Integridad",
    descripcion:
      "Actuamos con transparencia, ética profesional y claridad en cada proceso, fortaleciendo la confianza con nuestros clientes y aliados estratégicos.",
  },
  {
    valor: "Eficiencia",
    descripcion:
      "Optimizamos recursos, tiempos y procesos para garantizar operaciones ágiles y bien estructuradas. ",
  },
  {
    valor: "Seguridad",
    descripcion:
      "  Priorizamos la protección de la mercancía, el cumplimiento normativo y la prevención de riesgos en cada etapa logística.",
  },
  {
    valor: " Compromiso con el cliente",
    descripcion:
      "  Escuchamos, analizamos y diseñamos soluciones adaptadas a las necesidades específicas de cada empresa.",
  },
  {
    valor: "Mejora continua",
    descripcion:
      " Evaluamos constantemente nuestros procesos para perfeccionar nuestra operación y ofrecer un servicio cada vez más sólido y competitivo.",
  },
];

gsap.registerPlugin(ScrollTrigger);

const TABS_DATA = [
  {
    id: 1,
    title: "Misión",
    description:
      "Brindar soluciones logísticas portuarias y terrestres integrales mediante una gestión estratégica, eficiente y segura, que garantice el cumplimiento normativo, la optimización de recursos y el control operativo en cada etapa del proceso. Nuestra misión es acompañar a las empresas en la coordinación y supervisión de sus operaciones, reduciendo riesgos, mejorando tiempos y fortaleciendo su cadena de suministro con procesos estructurados, información clara y atención personalizada. Trabajamos para que cada operación se ejecute con precisión, responsabilidad y visión a largo plazo.",
    videoMp4: "/videos/video1.mp4",
  },
  {
    id: 2,
    title: "Visión",
    description:
      "Consolidarnos como una empresa referente en logística portuaria y coordinación operativa a nivel regional y nacional, reconocida por su profesionalismo, capacidad estratégica y altos estándares de control y seguridad. Aspiramos a convertirnos en el socio logístico de confianza para empresas que buscan eficiencia, cumplimiento y crecimiento sostenible, integrando innovación, mejora continua y relaciones de largo plazo basadas en transparencia y resultados. Nuestra visión es construir una organización sólida, preparada para adaptarse a los cambios del entorno logístico y generar valor constante para nuestros clientes.",
    videoMp4: "/videos/video2.mp4",
  },
];

const YodaSection = () => {
  const introRef = useRef(null);
  const pinRef = useRef(null);
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 769px)",
        isMobile: "(max-width: 768px)",
      },
      (context) => {
        let { isMobile } = context.conditions;

        ScrollTrigger.create({
          trigger: introRef.current,
          start: "top top",
          end: isMobile ? "top top" : "bottom top",
          pin: pinRef.current,
          pinSpacing: false,
        });

        ScrollTrigger.create({
          trigger: ".tabs_height",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const newIndex = Math.min(
              Math.floor(progress * TABS_DATA.length),
              TABS_DATA.length - 1,
            );
            setActiveIndex(newIndex);
          },
        });
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <div className="valores" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="valores__intro--wrapper"
        ref={introRef}
      >
        <div className="intro">
          <div className="contenedor" ref={pinRef}>
            <h2 className="valores-title">
              <span>Valores</span> Logística Portuaria Directa
            </h2>
            <p>
              Diseñamos operaciones claras, seguras y estratégicas para empresas
              que necesitan resultados, no improvisación.
            </p>
            <p>
              Somos especialistas en coordinación logística portuaria y
              terrestre.
            </p>

            <div className="valores__items">
              {VALORES.map((valor, index) => (
                <motion.div
                  className="valores__items--item"
                  whileHover={{
                    y: -12,
                    boxShadow: "0px 25px 50px rgba(0,0,0,0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  key={index}
                >
                  <h3>{valor.valor}</h3>
                  <p>{valor.descripcion}</p>
                </motion.div>
              ))}
              ;
            </div>
          </div>
        </div>
      </motion.div>

      <section className="valores__contenido">
        <div className="tabs_height">
          <div className="tabs_sticky-wrapper">
            <div className="contenedor">
              <div className="valores__tabs">
                <div className="valores__tabs--left">
                  {TABS_DATA.map((tab, index) => (
                    <div
                      key={tab.id}
                      className={`tabs_left-content ${activeIndex === index ? "active" : ""}`}
                      style={{
                        display: activeIndex === index ? "block" : "none",
                      }}
                    >
                      <h2>
                        {tab.title}
                        <span>{tab.highlight}</span>
                      </h2>
                      <p>{tab.description}</p>
                    </div>
                  ))}
                </div>

                <div className="valores__tabs--right">
                  {TABS_DATA.map((tab, index) => (
                    <div
                      key={tab.id}
                      className={`tabs_video ${activeIndex === index ? "active" : ""}`}
                      style={{
                        opacity: activeIndex === index ? 1 : 0,
                        position: "absolute",
                        inset: 0,
                        transition: "opacity 0.5s",
                      }}
                    >
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="video-element"
                      >
                        <source src={tab.videoMp4} type="video/mp4" />
                      </video>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YodaSection;
