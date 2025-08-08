import React from 'react';
import { FaGraduationCap, FaPaintBrush, FaBalanceScale, FaCogs, FaTractor, FaHeartbeat } from 'react-icons/fa';

import areaEducacion from '../assets/app-screenshot.jpg';
import areaHumanidades from '../assets/SaludServicioSocial.jpeg';
import areaEconomicas from '../assets/CienciasEconomicas.jpeg';
import areaIngenieria from '../assets/fondo4.jpg';
import areaAgricultura from '../assets/Agricultura.jpeg';
import areaSalud from '../assets/app-screenshot.jpg';
const AreasConocimiento = () => {
  // Datos de las áreas de conocimiento
   const areas = [
      {
        id: 1,
        title: "Educaciónfr",
        image: areaEducacion,
        description: "Herramientas para formación docente y aprendizaje continuo.",
        icon: "fas fa-graduation-cap"
      },
      {
        id: 2,
        title: "Humanidades y Artes",
        image: areaHumanidades,
        description: "Exploración de cultura, filosofía, lenguas y expresiones artísticas.",
        icon: "fas fa-paint-brush"
      },
      {
        id: 3,
        title: "Ciencias Económicas y Jurídicas",
        image: areaEconomicas,
        description: "Conocimientos sobre economía, derecho y desarrollo comunitario.",
        icon: "fas fa-balance-scale"
      },
      {
        id: 4,
        title: "Ingeniería e Industria",
        image: areaIngenieria,
        description: "Tecnologías para desarrollo industrial sostenible.",
        icon: "fas fa-cogs"
      },
      {
        id: 5,
        title: "Agricultura",
        image: areaAgricultura,
        description: "Técnicas agropecuarias para el desarrollo rural.",
        icon: "fas fa-tractor"
      },
      {
        id: 6,
        title: "Salud y Servicios Sociales",
        image: areaSalud,
        description: "Promoción de la salud y bienestar comunitario.",
        icon: "fas fa-heartbeat"
      }
    ];

  return (
    <section className="areas-section" id="areas">
      <div className="container">
        <div className="section-header">
          <h2>Áreas de Conocimiento</h2>
          <p>Explora las diferentes disciplinas que integra nuestra plataforma</p>
        </div>
        
        <div className="areas-grid">
          {areas.map(area => (
            <div 
              className="area-card" 
              key={area.id}
              style={{ '--area-color': area.color }}
            >
              <div className="area-icon">
                {area.icon}
              </div>
              <div className="area-image">
                <img 
                  src={area.image} 
                  alt={area.title} 
                  loading="lazy"
                />
              </div>
              <div className="area-content">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <a href="#" className="btn-learn-more">
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