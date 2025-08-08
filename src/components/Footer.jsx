export default function Footer() {
  const areas = [
    { id: 1, title: "Matemáticas" },
    { id: 2, title: "Ciencias Naturales" },
    { id: 3, title: "Lengua y Literatura" },
    { id: 4, title: "Ciencias Sociales" },
    { id: 5, title: "Educación Física" },
    { id: 6, title: "Artes" },
  ];

  // iconStyle, linkStyle y linkHoverStyle no se usan, se eliminan para limpiar el código.

  return (
    <footer
      style={{
        background: "linear-gradient(120deg, #0f172a 70%)",
        color: "#e0e7ff",
        padding: "56px 0 0 0",
        fontFamily: "'Inter', Arial, sans-serif",
        boxShadow: "0 -2px 32px rgba(44,62,80,0.10)",
        marginTop: "64px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "48px 32px",
          padding: "0 32px",
        }}
      >
        {/* Brand & Social */}
        <div>
          <img
            src="/placeholder.svg?height=60&width=180&text=UrActivaMente"
            alt="UrActivaMente"
            width={180}
            height={60}
            style={{
              marginBottom: "24px",
              borderRadius: "8px",
              boxShadow: "0 2px 12px #2563eb22",
            }}
          />
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#cbd5e1",
              margin: 0,
            }}
          >
            Una herramienta didáctica para el aprendizaje activo que integra
            todas las áreas del conocimiento.
          </p>
          <div style={{ marginTop: "28px" }}>
            <div style={{ display: "flex", gap: "16px" }}>
              <a
                href="#"
                aria-label="Facebook"
                style={{
                  color: "#3b82f6",
                  fontSize: "1.5rem",
                  background: "#1e293b",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px #2563eb22",
                  transition: "background 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "#2563eb")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "#1e293b")
                }
              >
                <i className="fab fa-facebook-f">F</i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                style={{
                  color: "#38bdf8",
                  fontSize: "1.5rem",
                  background: "#1e293b",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px #2563eb22",
                  transition: "background 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "#0ea5e9")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "#1e293b")
                }
              >
                <i className="fab fa-X">X</i>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                style={{
                  color: "#ec4899",
                  fontSize: "1.5rem",
                  background: "#1e293b",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px #2563eb22",
                  transition: "background 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "#db2777")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "#1e293b")
                }
              >
                <i className="fab fa-instagram">I</i>
              </a>
              <a
                href="#"
                aria-label="Youtube"
                style={{
                  color: "#dc2626",
                  fontSize: "1.5rem",
                  background: "#1e293b",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px #2563eb22",
                  transition: "background 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "#b91c1c")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "#1e293b")
                }
              >
                <i className="fab fa-youtube">Y</i>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            style={{
              fontSize: "1.15rem",
              fontWeight: 700,
              marginBottom: "22px",
              color: "#e0e7ff",
              letterSpacing: "0.5px",
            }}
          >
            Enlaces rápidos
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              color: "#cbd5e1",
              fontSize: "15px",
            }}
          >
            {[
              { href: "#hero", label: "Inicio" },
              { href: "#areas", label: "Áreas" },
              { href: "#about", label: "Acerca de" },
              { href: "#features", label: "Características" },
              { href: "#contact", label: "Contacto" },
            ].map((link) => (
              <li key={link.href} style={{ marginBottom: "14px" }}>
                <a
                  href={link.href}
                  style={{
                    color: "#cbd5e1",
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#cbd5e1")}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Knowledge Areas */}
        <div>
          <h4
            style={{
              fontSize: "1.15rem",
              fontWeight: 700,
              marginBottom: "22px",
              color: "#e0e7ff",
              letterSpacing: "0.5px",
            }}
          >
            Áreas de conocimiento
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              color: "#cbd5e1",
              fontSize: "15px",
            }}
          >
            {areas.map((area) => (
              <li key={area.id} style={{ marginBottom: "14px" }}>
                <a
                  href="#"
                  style={{
                    color: "#cbd5e1",
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#cbd5e1")}
                >
                  {area.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter & Contact */}
        <div>
          <h4
            style={{
              fontSize: "1.15rem",
              fontWeight: 700,
              marginBottom: "22px",
              color: "#e0e7ff",
              letterSpacing: "0.5px",
            }}
          >
            Newsletter
          </h4>
          <p
            style={{ color: "#cbd5e1", fontSize: "15px", marginBottom: "16px" }}
          >
            Suscríbete para recibir actualizaciones y novedades
          </p>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <input
              type="email"
              placeholder="Tu correo electrónico"
              required
              style={{
                padding: "12px 12px 12px 40px",
                borderRadius: "6px",
                border: "1px solid #334155",
                backgroundColor: "#1e293b",
                color: "#e0e7ff",
                fontSize: "15px",
                outline: "none",
                boxShadow: "0 1px 4px #2563eb11",
              }}
            />
            <button
              type="submit"
              style={{
                background: "linear-gradient(90deg, #2563eb 60%, #0ea5e9 100%)",
                color: "white",
                fontWeight: "bold",
                padding: "12px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                fontSize: "15px",
                boxShadow: "0 2px 8px #2563eb22",
                transition: "background 0.2s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#1e40af")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(90deg, #32eb25ff 60%, #0ea5e9 100%)")
              }
            >
              Suscribirse
            </button>
          </form>
          <div
            style={{
              marginTop: "28px",
              color: "#cbd5e1",
              fontSize: "15px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <i
                className="fas fa-map-marker-alt"
                style={{ color: "#38bdf8", fontSize: "1.1rem" }}
              ></i>
              <span>URACCAN, Nicaragua</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <i
                className="fas fa-phone"
                style={{ color: "#38bdf8", fontSize: "1.1rem" }}
              ></i>
              <span>+505 2222-3333</span>
            </div>
          </div>
        </div>
      </div>

      <hr
        style={{
          margin: "40px 0 0 0",
          borderColor: "#334155",
          borderStyle: "solid",
          borderWidth: "0.5px 0 0 0",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "15px",
          color: "#cbd5e1",
          textAlign: "center",
          padding: "24px 0 16px 0",
        }}
      >
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} URACTIVAMENTE - URACCAN. Todos los
          derechos reservados.
        </p>
        <div style={{ display: "flex", gap: "28px" }}>
          <a
            href="#"
            style={{
              color: "#cbd5e1",
              textDecoration: "none",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#cbd5e1")}
          >
            Términos y condiciones
          </a>
          <a
            href="#"
            style={{
              color: "#cbd5e1",
              textDecoration: "none",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#cbd5e1")}
          >
            Política de privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}
