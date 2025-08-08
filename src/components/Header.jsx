import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Importa tus imágenes
import logo from "../assets/app-screenshot.jpg";
import heroImage from "../assets/fondo.jpg";
import appScreenshot from "../assets/fondo3.jpg";
import Navbar from "./Navbar";
import AreasConocimiento from "./AreaConocimiento";

export default function LandingPage() {
  useEffect(() => {
    // Smooth scroll para los enlaces
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    // Botón de scroll to top
    const scrollTopBtn = document.getElementById("scrollTop");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        scrollTopBtn?.classList.add("show");
      } else {
        scrollTopBtn?.classList.remove("show");
      }
    });
  }, []);

  // Datos de las áreas de conocimiento
  const areas = [];

  // Características principales
  const features = [
    {
      title: "Contenido Multidisciplinario",
      description: "Acceso a recursos de todas las áreas del conocimiento.",
      icon: "fas fa-book-open",
    },
    {
      title: "Asesoría Especializada",
      description: "Contenidos validados por docentes y especialistas.",
      icon: "fas fa-users",
    },
    {
      title: "Aprendizaje Móvil",
      description: "Acceso desde cualquier dispositivo, en cualquier momento.",
      icon: "fas fa-mobile-alt",
    },
    {
      title: "Herramientas Didácticas",
      description: "Recursos interactivos para aprendizaje activo.",
      icon: "fas fa-chalkboard-teacher",
    },
    {
      title: "Formación Integral",
      description: "Combina conocimientos técnicos con valores humanos.",
      icon: "fas fa-brain",
    },
    {
      title: "Multiculturalidad",
      description: "Respeto y promoción de la diversidad cultural.",
      icon: "fas fa-globe-americas",
    },
  ];

  return (
    <div className="landing-page">
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero-section"
        id="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>UrActivaMente</h1>
              <h2>La plataforma educativa integral de URACCAN</h2>
              <p>
                Una herramienta didáctica para el aprendizaje activo que integra
                todas las áreas del conocimiento
              </p>
              <div className="download-buttons">
                <a href="#" className="btn-download">
                  <i className="fab fa-google-play"></i> Google Play
                </a>
                <a href="#" className="btn-download">
                  <i className="fab fa-app-store"></i> App Store
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img
                src={appScreenshot}
                alt="App UrActivaMente"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Conocimiento */}
      <AreasConocimiento />
      {/* Features Section Mejorada */}
      <section
        className="features-section"
        id="features"
        style={{
          width: "100vw",
          background: "linear-gradient(90deg, #f8fafc 60%, #e3eafc 100%)",
          padding: "4rem 0 3rem 0",
          margin: "0 -4vw",
        }}
      >
        <div
          className="features-container"
          style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 4vw" }}
        >
          <div
            className="section-header"
            style={{ textAlign: "center", marginBottom: "2.5rem" }}
          >
            <h2
              style={{
                fontSize: "2.2rem",
                fontWeight: 800,
                color: "#2c3e50",
                letterSpacing: "0.5px",
              }}
            >
              Características Principales
            </h2>
            <p
              style={{
                fontSize: "1.15rem",
                color: "#555",
                marginTop: "0.7rem",
              }}
            >
              Descubre todo lo que URActivaMente puede ofrecerte
            </p>
          </div>
          <div
            className="features-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.5rem",
              justifyItems: "center",
              width: "100%",
            }}
          >
            {features.map((feature, index) => (
              <div
                className="feature-card"
                key={index}
                style={{
                  background: "#fff",
                  borderRadius: "18px",
                  boxShadow: "0 8px 32px rgba(44,62,80,0.10)",
                  padding: "2.5rem 2rem 2rem 2rem",
                  textAlign: "center",
                  maxWidth: "420px",
                  width: "100%",
                  border: "1.5px solid #e0e7ef",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "box-shadow 0.3s, transform 0.3s",
                }}
              >
                <div
                  className="feature-icon"
                  style={{
                    fontSize: "2.7rem",
                    color: "#3498db",
                    marginBottom: "1.3rem",
                    background:
                      "linear-gradient(135deg, #3498db 60%, #6dd5ed 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  <i className={feature.icon}></i>
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#2c3e50",
                    marginBottom: "0.7rem",
                    letterSpacing: "0.2px",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    color: "#6c757d",
                    fontSize: "1.08rem",
                    marginTop: "0.5rem",
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form">
              <h2>Contacto</h2>
              <p className="lead">
                ¿Tienes preguntas o sugerencias? Escríbenos
              </p>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Nombre" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Asunto" />
                </div>
                <div className="form-group">
                  <textarea rows={5} placeholder="Mensaje" required></textarea>
                </div>
                <button type="submit" className="btn-submit">
                  Enviar mensaje
                </button>
              </form>
            </div>
            <div className="contact-info">
              <h3>Información de contacto</h3>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>URACCAN, Recinto Nueva Guinea, Nicaragua</span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>+505 1234 5678</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>uractivamente@uraccan.edu.ni</span>
                </li>
              </ul>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-about">
              <img src={logo} alt="UrActivaMente" width="180" />
              <p>
                Una herramienta didáctica para el aprendizaje activo que integra
                todas las áreas del conocimiento.
              </p>
              <div className="footer-social">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="footer-links">
              <h4>Enlaces rápidos</h4>
              <ul>
                <li>
                  <a href="#hero">Inicio</a>
                </li>
                <li>
                  <a href="#areas">Áreas</a>
                </li>
                <li>
                  <a href="#about">Acerca de</a>
                </li>
                <li>
                  <a href="#features">Características</a>
                </li>
                <li>
                  <a href="#contact">Contacto</a>
                </li>
              </ul>
            </div>
            <div className="footer-areas">
              <h4>Áreas de conocimiento</h4>
              <ul>
                {areas.map((area) => (
                  <li key={area.id}>
                    <a href="#">{area.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-newsletter">
              <h4>Newsletter</h4>
              <p>Suscríbete para recibir actualizaciones</p>
              <form>
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  required
                />
                <button type="submit">Suscribir</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} UrActivaMente - URACCAN. Todos
              los derechos reservados.
            </p>
            <div className="legal-links">
              <a href="#">Términos y condiciones</a>
              <a href="#">Política de privacidad</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <a href="#hero" className="scroll-top" id="scrollTop">
        <i className="fas fa-arrow-up"></i>
      </a>
    </div>
  );
}
