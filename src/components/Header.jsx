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
import Footer from "./Footer.jsx";

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
      <section
        className="contact-section"
        id="contact"
        style={{
          background: "linear-gradient(120deg, #f6f8fa 60%, #e3eafc 100%)",
          padding: "4rem 0 3.5rem 0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "60vh",
          }}
        >
          <div
            className="contact-card"
            style={{
              background: "#fff",
              borderRadius: "28px",
              boxShadow:
                "0 6px 32px 0 rgba(44,62,80,0.10), 0 1.5px 6px 0 rgba(52,152,219,0.07)",
              padding: "2.8rem 2.5rem",
              maxWidth: "950px",
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              gap: "2.8rem",
              justifyContent: "center",
              border: "1.5px solid #e0e7ef",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              className="contact-form"
              style={{
                flex: "1 1 350px",
                minWidth: "320px",
                maxWidth: "440px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                background: "rgba(245,250,255,0.85)",
                borderRadius: "18px",
                boxShadow: "0 2px 8px rgba(44,62,80,0.04)",
                padding: "2.2rem 1.5rem",
                border: "1px solid #e0e7ef",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: "1.2rem",
                }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #3498db 60%, #6dd5ed 100%)",
                    borderRadius: "50%",
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.7rem",
                    boxShadow: "0 2px 8px rgba(52,152,219,0.13)",
                  }}
                >
                  <i
                    className="fas fa-paper-plane"
                    style={{ color: "#fff", fontSize: "2rem" }}
                  ></i>
                </div>
                <h2
                  style={{
                    fontWeight: 800,
                    color: "#2c3e50",
                    fontSize: "1.6rem",
                    margin: 0,
                  }}
                >
                  Contacto
                </h2>
                <p
                  className="lead"
                  style={{
                    color: "#6c757d",
                    margin: 0,
                    marginTop: "0.5rem",
                    fontSize: "1.08rem",
                  }}
                >
                  ¿Tienes preguntas o sugerencias? Escríbenos
                </p>
              </div>
              <form autoComplete="off">
                <div className="form-group" style={{ marginBottom: "1.1rem" }}>
                  <input
                    type="text"
                    placeholder="Nombre"
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem 1.1rem",
                      borderRadius: "10px",
                      border: "1.5px solid #d0d7e6",
                      fontSize: "1rem",
                      background: "#fafdff",
                      outline: "none",
                      transition: "border 0.2s, box-shadow 0.2s",
                    }}
                    onFocus={(e) =>
                      (e.target.style.border = "1.5px solid #3498db")
                    }
                    onBlur={(e) =>
                      (e.target.style.border = "1.5px solid #d0d7e6")
                    }
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "1.1rem" }}>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem 1.1rem",
                      borderRadius: "10px",
                      border: "1.5px solid #d0d7e6",
                      fontSize: "1rem",
                      background: "#fafdff",
                      outline: "none",
                      transition: "border 0.2s, box-shadow 0.2s",
                    }}
                    onFocus={(e) =>
                      (e.target.style.border = "1.5px solid #3498db")
                    }
                    onBlur={(e) =>
                      (e.target.style.border = "1.5px solid #d0d7e6")
                    }
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "1.1rem" }}>
                  <input
                    type="text"
                    placeholder="Asunto"
                    style={{
                      width: "100%",
                      padding: "0.75rem 1.1rem",
                      borderRadius: "10px",
                      border: "1.5px solid #d0d7e6",
                      fontSize: "1rem",
                      background: "#fafdff",
                      outline: "none",
                      transition: "border 0.2s, box-shadow 0.2s",
                    }}
                    onFocus={(e) =>
                      (e.target.style.border = "1.5px solid #3498db")
                    }
                    onBlur={(e) =>
                      (e.target.style.border = "1.5px solid #d0d7e6")
                    }
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "1.3rem" }}>
                  <textarea
                    rows={5}
                    placeholder="Mensaje"
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem 1.1rem",
                      borderRadius: "10px",
                      border: "1.5px solid #d0d7e6",
                      fontSize: "1rem",
                      background: "#fafdff",
                      outline: "none",
                      resize: "vertical",
                      transition: "border 0.2s, box-shadow 0.2s",
                    }}
                    onFocus={(e) =>
                      (e.target.style.border = "1.5px solid #3498db")
                    }
                    onBlur={(e) =>
                      (e.target.style.border = "1.5px solid #d0d7e6")
                    }
                  ></textarea>
                </div>
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    backgroundColor: "green",
                    color: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    padding: "0.9rem 0",
                    fontWeight: 700,
                    fontSize: "1.08rem",
                    letterSpacing: "0.5px",
                    boxShadow: "0 2px 8px rgba(52,152,219,0.10)",
                    transition: "background 0.2s, box-shadow 0.2s",
                  }}
                >
                  <i
                    className="fas fa-paper-plane"
                    style={{ marginRight: "0.7rem" }}
                  ></i>
                  Enviar mensaje
                </button>
              </form>
            </div>
            <div
              className="contact-info"
              style={{
                flex: "1 1 260px",
                minWidth: "260px",
                maxWidth: "340px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                background: "#f8fafc",
                borderRadius: "18px",
                padding: "2.2rem 1.5rem 1.7rem 1.5rem",
                boxShadow: "0 2px 8px rgba(44,62,80,0.07)",
                border: "1px solid #e0e7ef",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: "1.1rem",
                }}
              >
                <div
                  style={{
                    borderRadius: "50%",
                    width: "54px",
                    height: "54px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.5rem",
                    boxShadow: "0 2px 8px rgba(52,152,219,0.13)",
                  }}
                >
                  <i
                    className="fas fa-user-tie"
                    style={{ color: "#fff", fontSize: "1.7rem" }}
                  ></i>
                </div>
                <h3
                  style={{
                    fontWeight: 700,
                    color: "#2c3e50",
                    fontSize: "1.13rem",
                    margin: 0,
                  }}
                >
                  Información de contacto
                </h3>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  marginBottom: "1.3rem",
                  width: "100%",
                }}
              >
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.8rem",
                    color: "#555",
                    gap: "0.7rem",
                  }}
                >
                  <i
                    className="fas fa-map-marker-alt"
                    style={{ color: "#3498db", fontSize: "1.2rem" }}
                  ></i>
                  <span>URACCAN, Recinto Nueva Guinea, Nicaragua</span>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.8rem",
                    color: "#555",
                    gap: "0.7rem",
                  }}
                >
                  <i
                    className="fas fa-phone"
                    style={{ color: "#3498db", fontSize: "1.2rem" }}
                  ></i>
                  <span>+505 1234 5678</span>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#555",
                    gap: "0.7rem",
                  }}
                >
                  <i
                    className="fas fa-envelope"
                    style={{ color: "#3498db", fontSize: "1.2rem" }}
                  ></i>
                  <span>uractivamente@uraccan.edu.ni</span>
                </li>
              </ul>
              <div
                className="social-links"
                style={{ display: "flex", gap: "1.1rem", marginTop: "0.5rem" }}
              >
                <a
                  href="#"
                  style={{
                    color: "#3498db",
                    fontSize: "1.25rem",
                    transition: "color 0.2s",
                  }}
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  style={{
                    color: "#3498db",
                    fontSize: "1.25rem",
                    transition: "color 0.2s",
                  }}
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  style={{
                    color: "#3498db",
                    fontSize: "1.25rem",
                    transition: "color 0.2s",
                  }}
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  style={{
                    color: "#3498db",
                    fontSize: "1.25rem",
                    transition: "color 0.2s",
                  }}
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <a href="#hero" className="scroll-top" id="scrollTop">
        <i className="fas fa-arrow-up"></i>
      </a>
    </div>
  );
}
