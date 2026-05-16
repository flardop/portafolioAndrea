"use client";

import { useEffect, useMemo, useState } from "react";

const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "perfil", label: "Perfil" },
  { id: "experiencia", label: "Experiencia" },
  { id: "competencias", label: "Competencias" },
  { id: "contacto", label: "Contacto" },
];

const profileFacts = [
  {
    label: "Formación",
    value: "Grado en Derecho, Universidad de Barcelona",
  },
  {
    label: "Ubicación",
    value: "Barcelona, España",
  },
  {
    label: "Áreas de interés",
    value: "Derecho internacional, derechos humanos y diplomacia",
  },
  {
    label: "Idiomas",
    value: "Español, catalán, inglés (C1) y francés (A2)",
  },
];

const languages = [
  { name: "Español", level: "Nativo", percent: 100 },
  { name: "Catalán", level: "Nativo", percent: 100 },
  { name: "Inglés", level: "Avanzado (C1)", percent: 85 },
  { name: "Francés", level: "Básico (A2)", percent: 30 },
];

const focusAreas = [
  "Derecho internacional",
  "Derechos humanos",
  "Resolución de disputas",
  "Debate y representación institucional",
];

const experiences = [
  {
    title: "Delegada, Comité de Seguridad Internacional",
    organization: "GIMUN - Geneva International Model United Nations",
    location: "Sede de la ONU, Ginebra",
    date: "2025",
    description:
      "Seleccionada como delegada para representar a un país en el Comité de Seguridad Internacional en la conferencia anual de GIMUN celebrada en la sede de las Naciones Unidas en Ginebra.",
    highlight: "Selección destacada",
  },
  {
    title: "Segundo Lugar - Competición de Ensayos",
    organization:
      "Global Virtual Model United Nations Essay Competition IV (GVMUNEC IV)",
    location: "Online",
    date: "2025",
    description:
      "Segundo lugar en la competición de ensayos. El texto fue difundido en los canales oficiales de la organización.",
    highlight: "Reconocimiento",
  },
  {
    title: "Delegada",
    organization: "Youth Vision Assembly (YVA)",
    location: "Amsterdam, Países Bajos",
    date: "2025",
    description:
      "Participación en un foro multilateral orientado a juventud, liderazgo y soluciones sostenibles.",
  },
  {
    title: "Participante",
    organization: "Movers Programme - PNUD",
    location: "Online",
    date: "2025",
    description:
      "Programa de empoderamiento juvenil enfocado en liderazgo, desarrollo sostenible y movilización comunitaria.",
  },
  {
    title: "Delegada",
    organization: "Moot Court Salamanca",
    location: "Salamanca, España",
    date: "2024",
    description:
      "Participación en la simulación del Tribunal Europeo de Derechos Humanos.",
  },
  {
    title: "Programa de Periodismo",
    organization: "GVMUNEC - Journalist Fall Internship",
    location: "Online",
    date: "2024",
    description:
      "Experiencia en reportaje, investigación y comunicación institucional.",
  },
];

const memberships = [
  "European Youth Parliament (EYP)",
  "Debate Team 2025 - Universidad de Barcelona",
  "Young ICCA",
  "ELSA (European Law Students' Association)",
  "SELS Viena - Dispute Resolution Programme",
];

const skills = [
  {
    category: "Base jurídica",
    icon: "scale",
    items: [
      "Análisis jurídico",
      "Derecho internacional",
      "Derechos humanos",
      "Resolución de disputas",
    ],
  },
  {
    category: "Representación y debate",
    icon: "message",
    items: [
      "Debate académico",
      "Model United Nations",
      "Negociación",
      "Oratoria pública",
    ],
  },
  {
    category: "Investigación y comunicación",
    icon: "pen",
    items: [
      "Redacción",
      "Investigación",
      "Trabajo en equipo",
      "Comunicación institucional",
    ],
  },
];

const contacts = [
  {
    label: "Email",
    value: "andrea.perez.125900@gmail.com",
    href: "mailto:andrea.perez.125900@gmail.com",
    icon: "mail",
  },
  {
    label: "Teléfono",
    value: "+34 654 87 43 89",
    href: "tel:+34654874389",
    icon: "phone",
  },
  {
    label: "Ubicación",
    value: "Barcelona, España",
    icon: "pin",
  },
];

function Icon({ name }) {
  const icons = {
    arrow: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    ),
    check: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    ),
    scale: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 6l3 1m0 0-3 9a5.002 5.002 0 0 0 6.001 0M6 7l3 9M6 7l6-2m6 2 3-1m-3 1-3 9a5.002 5.002 0 0 0 6.001 0M18 7l3 9m-3-9-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
      />
    ),
    message: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z"
      />
    ),
    pen: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 1 1 3.536 3.536L6.5 21.036H3v-3.572L16.732 3.732Z"
      />
    ),
    mail: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
      />
    ),
    phone: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5Z"
      />
    ),
    pin: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 16.657 13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </>
    ),
    copy: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1M8 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 0h2a2 2 0 0 1 2 2v3m2 4H10m0 0 3-3m-3 3 3 3"
      />
    ),
    menu: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    ),
    close: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18 18 6M6 6l12 12"
      />
    ),
    up: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 10l7-7m0 0 7 7m-7-7v18"
      />
    ),
  };

  return (
    <svg
      className="icon"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

function useActiveSection() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));

    const onScroll = () => {
      const position = window.scrollY + 180;
      setScrolled(window.scrollY > 16);

      for (const section of sections) {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (position >= top && position < top + height) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { activeSection, scrolled };
}

export default function Page() {
  const { activeSection, scrolled } = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("andrea.perez.125900@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <main className="site-shell">
      <header className={`site-header ${scrolled ? "is-solid" : ""}`}>
        <nav className="container nav-wrap">
          <a className="brand-mark" href="#inicio" onClick={handleNavClick}>
            <span className="brand-badge">AP</span>
            <span className="brand-name">Andrea Pérez</span>
          </a>

          <ul className={`nav-list ${mobileOpen ? "is-open" : ""}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={`nav-link ${activeSection === item.id ? "is-active" : ""}`}
                  href={`#${item.id}`}
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="menu-button"
            type="button"
            aria-label="Abrir menú"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
          >
            <Icon name={mobileOpen ? "close" : "menu"} />
          </button>
        </nav>
      </header>

      <section id="inicio" className="hero-section">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow reveal">Portafolio académico</p>
            <div className="hero-heading reveal">
              <span className="hero-tag">AP</span>
              <h1>Andrea Pérez</h1>
            </div>
            <p className="hero-role reveal">Estudiante de Derecho</p>
            <p className="hero-summary reveal">
              Estudiante de Derecho en la Universidad de Barcelona con interés en
              derecho internacional, derechos humanos, diplomacia y resolución de
              disputas. Experiencia en debate académico, simulaciones de Naciones
              Unidas y programas internacionales.
            </p>

            <div className="hero-actions reveal">
              <a className="button button-primary" href="#contacto">
                Contacto
                <Icon name="arrow" />
              </a>
              <a className="button button-secondary" href="#experiencia">
                Experiencia seleccionada
              </a>
            </div>
          </div>

          <aside className="profile-sheet reveal">
            <div className="sheet-header">
              <p>Resumen</p>
              <span>2024 - 2025</span>
            </div>

            <div className="sheet-body">
              {profileFacts.map((fact) => (
                <article className="sheet-row" key={fact.label}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </article>
              ))}
            </div>

            <div className="sheet-footer">
              <a href="mailto:andrea.perez.125900@gmail.com">
                andrea.perez.125900@gmail.com
              </a>
              <a href="tel:+34654874389">+34 654 87 43 89</a>
            </div>
          </aside>
        </div>
      </section>

      <section id="perfil" className="content-section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Perfil</p>
            <h2>Formación jurídica con proyección internacional</h2>
          </div>

          <div className="profile-layout">
            <div className="profile-copy reveal">
              <p>
                Mi formación se orienta al análisis jurídico, el derecho
                internacional y los entornos institucionales de alcance global.
              </p>
              <p>
                He complementado los estudios universitarios con participación en
                debate académico, simulaciones multilaterales y programas de
                liderazgo vinculados al ámbito jurídico e internacional.
              </p>
              <p>
                Durante 2024 y 2025 he desarrollado experiencia en oratoria,
                negociación, investigación y representación en contextos
                académicos y multilaterales.
              </p>
            </div>

            <aside className="detail-card reveal">
              <div className="detail-block">
                <h3>Idiomas</h3>
                <div className="language-list">
                  {languages.map((language) => (
                    <article className="language-card" key={language.name}>
                      <div className="language-row">
                        <span>{language.name}</span>
                        <small>{language.level}</small>
                      </div>
                      <div className="progress-track">
                        <span
                          className="progress-fill"
                          style={{ width: `${language.percent}%` }}
                        />
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="detail-block">
                <h3>Áreas de interés</h3>
                <ul className="focus-list">
                  {focusAreas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="experiencia" className="content-section section-alt">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Experiencia</p>
            <h2>Experiencia seleccionada</h2>
            <p className="section-copy">
              Participación académica e internacional vinculada al debate, la
              representación institucional y el desarrollo jurídico.
            </p>
          </div>

          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-item reveal" key={`${experience.title}-${experience.organization}`}>
                <div className="timeline-meta">
                  <span className="timeline-year">{experience.date}</span>
                  <span className="timeline-location">{experience.location}</span>
                </div>

                <div className={`timeline-card ${experience.highlight ? "is-highlight" : ""}`}>
                  {experience.highlight ? (
                    <span className="timeline-badge">{experience.highlight}</span>
                  ) : null}
                  <h3>{experience.title}</h3>
                  <p className="timeline-organization">{experience.organization}</p>
                  <p className="timeline-description">{experience.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="membership-block reveal">
            <h3>Asociaciones y programas</h3>
            <div className="tag-list">
              {memberships.map((item) => (
                <span className="tag-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="competencias" className="content-section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Competencias</p>
            <h2>Áreas de trabajo y capacidades</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card reveal" key={skill.category}>
                <div className="skill-icon">
                  <Icon name={skill.icon} />
                </div>
                <h3>{skill.category}</h3>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>
                      <span className="bullet" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="content-section section-alt">
        <div className="container contact-layout">
          <div className="section-heading reveal">
            <p className="eyebrow">Contacto</p>
            <h2>Contacto académico y profesional</h2>
            <p className="section-copy">
              Disponible para consultas, colaboraciones y oportunidades
              relacionadas con el ámbito jurídico e internacional.
            </p>
          </div>

          <div className="contact-panel reveal">
            <div className="contact-grid">
              {contacts.map((contact) => {
                const content = (
                  <>
                    <div className="contact-icon">
                      <Icon name={contact.icon} />
                    </div>
                    <div className="contact-copy">
                      <span>{contact.label}</span>
                      <strong>{contact.value}</strong>
                    </div>
                  </>
                );

                return contact.href ? (
                  <a className="contact-card" href={contact.href} key={contact.label}>
                    {content}
                  </a>
                ) : (
                  <div className="contact-card" key={contact.label}>
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="copy-strip">
              <p>Copiar email</p>
              <button className="button button-secondary" type="button" onClick={handleCopy}>
                <Icon name={copied ? "check" : "copy"} />
                {copied ? "Copiado" : "Copiar"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-line reveal">
          <p>© {year} Andrea Pérez</p>
          <a href="#inicio">
            <Icon name="up" />
            Volver arriba
          </a>
        </div>
      </footer>
    </main>
  );
}
