import React from "react";
import {
  FaGraduationCap,
  FaPaintBrush,
  FaBalanceScale,
  FaCogs,
  FaTractor,
  FaHeartbeat,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import areaEducacion from "../assets/fondo6.jpg";
import areaHumanidades from "../assets/SaludServicioSocial.jpeg";
import areaEconomicas from "../assets/CienciasEconomicas.jpeg";
import areaIngenieria from "../assets/fondo4.jpg";
import areaAgricultura from "../assets/Agricultura.jpeg";
import areaSalud from "../assets/fondo5.jpg";
const AreasConocimiento = () => {
  // Datos de las áreas de conocimiento
  const areas = [
    {
      id: 1,
      title: "Área de Conocimiento Educación",
      image: areaEducacion,
      description:
        "Herramientas para formación docente y aprendizaje continuo.",
      icon: "fas fa-graduation-cap",
    },
    {
      id: 2,
      title: "Área del Conocimiento Humanidades y Artes",
      image: areaHumanidades,
      description:
        "Exploración de cultura, filosofía, lenguas y expresiones artísticas.",
      icon: "fas fa-paint-brush",
    },
    {
      id: 3,
      title: "Área del Conocimiento Ciencias Económicas y Jurídicas",
      image: areaEconomicas,
      description:
        "Conocimientos sobre economía, derecho y desarrollo comunitario.",
      icon: "fas fa-balance-scale",
    },
    {
      id: 4,
      title:
        "Área del Conocimiento Ciencias; Ingeniería, Industria y Construcción",
      image: areaIngenieria,
      description: "Tecnologías para desarrollo industrial sostenible.",
      icon: "fas fa-cogs",
    },
    {
      id: 5,
      title: "Área del Conocimiento Agricultura",
      image: areaAgricultura,
      description: "Técnicas agropecuarias para el desarrollo rural.",
      icon: "fas fa-tractor",
    },
    {
      id: 6,
      title: "Área del Conocimiento Salud y Servicios Sociales",
      image: areaSalud,
      description: "Promoción de la salud y bienestar comunitario.",
      icon: "fas fa-heartbeat",
    },
  ];

  return (
    <section className="areas-section" id="areas">
      <h2 className="section-header-areas">Áreas de Conocimiento</h2>
      <h4 className="section-subtitle-areas">
        Explora las diferentes disciplinas que integra nuestra plataforma
      </h4>
      <div className="container">
        <div className="areas-grid">
          {areas.map((area) => (
            <div className="area-card" key={area.id}>
              <div className="area-image">
                <img src={area.image} alt={area.title} loading="lazy" />
              </div>
              <div className="area-content">
                <div className="area-icon-area">
                  <i className={area.icon}></i>
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <a
                  href="#"
                  className="btn-learn-more"
                  style={{
                    fontSize: "1.2rem",
                    color: "#ffffffff",
                    backgroundColor: "green",
                  }}
                >
                  Saber más <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasConocimiento;
