import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importa tus imágenes
import logo from '../assets/app-screenshot.jpg';
import heroImage from '../assets/app-screenshot.jpg';
import appScreenshot from '../assets/app-screenshot.jpg';
import areaEducacion from '../assets/app-screenshot.jpg';
import areaHumanidades from '../assets/app-screenshot.jpg';
import areaEconomicas from '../assets/app-screenshot.jpg';
import areaIngenieria from '../assets/app-screenshot.jpg';
import areaAgricultura from '../assets/app-screenshot.jpg';
import areaSalud from '../assets/app-screenshot.jpg';
import testimonial1 from '../assets/app-screenshot.jpg';
import testimonial2 from '../assets/app-screenshot.jpg';
import testimonial3 from '../assets/app-screenshot.jpg';
import Navbar from './Navbar';

export default function LandingPage() {
  useEffect(() => {
    // Smooth scroll para los enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Botón de scroll to top
    const scrollTopBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollTopBtn?.classList.add('show');
      } else {
        scrollTopBtn?.classList.remove('show');
      }
    });
  }, []);

  // Datos de las áreas de conocimiento
  const areas = [
    {
      id: 1,
      title: "Educación",
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

  // Características principales
  const features = [
    {
      title: "Contenido Multidisciplinario",
      description: "Acceso a recursos de todas las áreas del conocimiento.",
      icon: "fas fa-book-open"
    },
    {
      title: "Asesoría Especializada",
      description: "Contenidos validados por docentes y especialistas.",
      icon: "fas fa-users"
    },
    {
      title: "Aprendizaje Móvil",
      description: "Acceso desde cualquier dispositivo, en cualquier momento.",
      icon: "fas fa-mobile-alt"
    },
    {
      title: "Herramientas Didácticas",
      description: "Recursos interactivos para aprendizaje activo.",
      icon: "fas fa-chalkboard-teacher"
    },
    {
      title: "Formación Integral",
      description: "Combina conocimientos técnicos con valores humanos.",
      icon: "fas fa-brain"
    },
    {
      title: "Multiculturalidad",
      description: "Respeto y promoción de la diversidad cultural.",
      icon: "fas fa-globe-americas"
    }
  ];

  // Testimonios
  const testimonials = [
    {
      quote: "UrActivaMente ha revolucionado mi forma de enseñar. Los recursos multidisciplinarios me permiten crear experiencias de aprendizaje más enriquecedoras.",
      name: "Prof. María López",
      role: "Docente de Humanidades",
      image: testimonial1
    },
    {
      quote: "Como estudiante, valoro poder acceder a contenidos de diferentes áreas que complementan mi formación profesional en ingeniería.",
      name: "Juan Pérez",
      role: "Estudiante de Ingeniería",
      image: testimonial2
    },
    {
      quote: "La integración de conocimientos agrícolas con aspectos económicos y sociales ha sido clave para mejorar nuestras prácticas comunitarias.",
      name: "Ana Ruiz",
      role: "Líder comunitaria",
      image: testimonial3
    }
  ];

  return (
    <div className="landing-page">
    <Navbar />

      {/* Hero Section */}
      <section className="hero-section" id="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>UrActivaMente</h1>
              <h2>La plataforma educativa integral de URACCAN</h2>
              <p>Una herramienta didáctica para el aprendizaje activo que integra todas las áreas del conocimiento</p>
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
              <img src={appScreenshot} alt="App UrActivaMente" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Conocimiento */}
      <section className="areas-section" id="areas">
        <div className="container">
          <div className="section-header">
            <h2>Áreas de Conocimiento</h2>
            <p>Explora las diferentes disciplinas que integra nuestra plataforma</p>
          </div>
          <div className="areas-grid">
            {areas.map(area => (
              <div className="area-card" key={area.id}>
                <div className="area-icon">
                  <i className={area.icon}></i>
                </div>
                <div className="area-image">
                  <img src={area.image} alt={area.title} />
                </div>
                <div className="area-content">
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <a href="#" className="btn-learn-more">Saber más</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img src={appScreenshot} alt="UrActivaMente" />
            </div>
            <div className="about-text">
              <h2>¿Qué es UrActivaMente?</h2>
              <p className="lead">Una aplicación integradora diseñada en URACCAN</p>
              <p>UrActivaMente es una herramienta didáctica innovadora que reúne conocimientos de todas las áreas académicas, diseñada y asesorada por docentes y especialistas de cada disciplina. Nuestra aplicación promueve el aprendizaje activo mediante recursos interactivos, contenidos actualizados y metodologías pedagógicas modernas.</p>
              <div className="about-features">
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Contenidos validados por expertos</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Enfoque multicultural</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Acceso desde cualquier dispositivo</span>
                </div>
              </div>
              <button className="btn-watch-video">
                <i className="fas fa-play"></i> Ver video explicativo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <div className="container">
          <div className="section-header">
            <h2>Características Principales</h2>
            <p>Descubre todo lo que UrActivaMente puede ofrecerte</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>Lo que dicen nuestros usuarios</h2>
            <p>Experiencias reales de la comunidad educativa</p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <p>"{testimonial.quote}"</p>
                  </div>
                  <div className="testimonial-author">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <div>
                      <h5>{testimonial.name}</h5>
                      <small>{testimonial.role}</small>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form">
              <h2>Contacto</h2>
              <p className="lead">¿Tienes preguntas o sugerencias? Escríbenos</p>
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
                <button type="submit" className="btn-submit">Enviar mensaje</button>
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
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
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
              <p>Una herramienta didáctica para el aprendizaje activo que integra todas las áreas del conocimiento.</p>
              <div className="footer-social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            <div className="footer-links">
              <h4>Enlaces rápidos</h4>
              <ul>
                <li><a href="#hero">Inicio</a></li>
                <li><a href="#areas">Áreas</a></li>
                <li><a href="#about">Acerca de</a></li>
                <li><a href="#features">Características</a></li>
                <li><a href="#contact">Contacto</a></li>
              </ul>
            </div>
            <div className="footer-areas">
              <h4>Áreas de conocimiento</h4>
              <ul>
                {areas.map(area => (
                  <li key={area.id}><a href="#">{area.title}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-newsletter">
              <h4>Newsletter</h4>
              <p>Suscríbete para recibir actualizaciones</p>
              <form>
                <input type="email" placeholder="Tu correo electrónico" required />
                <button type="submit">Suscribir</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} UrActivaMente - URACCAN. Todos los derechos reservados.</p>
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