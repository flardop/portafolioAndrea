"use client";

import { useEffect, useState } from "react";

const email = "andrea.perez.125900@gmail.com";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Mi", href: "#sobre-mi" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contacto", href: "#contacto" },
];

const languages = [
  { name: "Espanol", level: "Nativo", percent: 100 },
  { name: "Catalan", level: "Nativo", percent: 100 },
  { name: "Ingles", level: "Avanzado (C1)", percent: 85 },
  { name: "Frances", level: "Basico (A2)", percent: 30 },
];

const experiences = [
  {
    title: "Delegada, Comite de Seguridad Internacional",
    organization: "GIMUN - Geneva International Model United Nations",
    location: "Sede de la ONU, Ginebra",
    date: "2025",
    description:
      "Seleccionada como delegada para representar a un pais en el Comite de Seguridad Internacional en la prestigiosa conferencia anual de GIMUN celebrada en la sede de las Naciones Unidas en Ginebra.",
    highlight: true,
    badge: "Destacado",
    icon: "globe",
  },
  {
    title: "Segundo Lugar - Competicion de Ensayos",
    organization:
      "Global Virtual Model United Nations Essay Competition IV (GVMUNEC IV)",
    location: "Online",
    date: "2025",
    description:
      "Obtuve el segundo lugar en la competicion de ensayos. El ensayo fue destacado en los canales oficiales de redes sociales de la competicion.",
    highlight: true,
    badge: "Destacado",
    icon: "trophy",
  },
  {
    title: "Delegada",
    organization: "Youth Vision Assembly (YVA)",
    location: "Amsterdam, Paises Bajos",
    date: "2025",
    description:
      "Represente perspectivas juveniles en un foro multilateral discutiendo desafios globales y soluciones sostenibles.",
    icon: "users",
  },
  {
    title: "Participante",
    organization: "Movers Programme - PNUD",
    location: "Online",
    date: "2025",
    description:
      "Participe en una iniciativa de empoderamiento juvenil enfocada en liderazgo, desarrollo sostenible y movilizacion comunitaria.",
    icon: "star",
  },
  {
    title: "Delegada",
    organization: "Moot Court Salamanca",
    location: "Salamanca, Espana",
    date: "2024",
    description:
      "Participe en la simulacion del Tribunal Europeo de Derechos Humanos.",
    icon: "scale",
  },
  {
    title: "Programa de Periodismo",
    organization: "GVMUNEC - Journalist Fall Internship",
    location: "Online",
    date: "2024",
    description:
      "Adquiri experiencia en reportaje, investigacion y comunicaciones mediaticas.",
    icon: "pen",
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
    category: "Derecho y Juridico",
    icon: "scale",
    items: [
      "Derecho Internacional",
      "Derechos Humanos",
      "Derecho Humanitario",
      "Resolucion de Disputas",
      "Analisis Juridico",
    ],
  },
  {
    category: "Oratoria y Debate",
    icon: "message",
    items: [
      "Debate Academico",
      "Model United Nations",
      "Moot Court",
      "Negociacion",
      "Discurso Publico",
    ],
  },
  {
    category: "Comunicacion",
    icon: "pen",
    items: [
      "Redaccion Juridica",
      "Periodismo",
      "Investigacion",
      "Trabajo en Equipo",
      "Liderazgo",
    ],
  },
];

const contacts = [
  {
    label: "Email",
    value: email,
    href: `mailto:${email}`,
    icon: "mail",
  },
  {
    label: "Telefono",
    value: "+34 654 87 43 89",
    href: "tel:+34654874389",
    icon: "phone",
  },
  {
    label: "Ubicacion",
    value: "Barcelona, Espana",
    icon: "pin",
  },
];

function Icon({ name, className }) {
  const classes = className ?? "w-5 h-5";

  if (name === "menu") {
    return (
      <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    );
  }

  if (name === "close") {
    return (
      <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    );
  }

  if (name === "arrow-right") {
    return (
      <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    );
  }

  if (name === "arrow-down") {
    return (
      <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    );
  }

  if (name === "arrow-up") {
    return (
      <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    );
  }

  if (name === "chevron-right") {
    return (
      <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    );
  }

  if (name === "copy") {
    return (
      <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
        />
      </svg>
    );
  }

  if (name === "globe") {
    return (
      <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    );
  }

  if (name === "trophy") {
    return (
      <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    );
  }

  if (name === "users") {
    return (
      <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    );
  }

  if (name === "star") {
    return (
      <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.98 10.1c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    );
  }

  if (name === "scale") {
    return (
      <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    );
  }

  if (name === "message") {
    return (
      <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    );
  }

  if (name === "pen") {
    return (
      <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    );
  }

  if (name === "pin") {
    return (
      <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg className={classes} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }

  return null;
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 20);

      for (const item of [...navItems].reverse()) {
        const section = document.getElementById(item.href.slice(1));

        if (section && section.getBoundingClientRect().top <= 150) {
          setActiveSection(item.href);
          break;
        }
      }
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState);

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!copied) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeoutId);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-screen">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <a
                className="text-xl font-semibold text-foreground tracking-tight hover:text-primary transition-colors"
                href="#inicio"
              >
                Andrea Perez
              </a>
            </div>

            <ul className="site-nav-list hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <li key={item.href}>
                    <a
                      className={`relative px-4 py-2 text-sm transition-colors rounded-full ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      href={item.href}
                    >
                      {isActive ? (
                        <span className="absolute inset-0 bg-primary/10 rounded-full" />
                      ) : null}
                      <span className="relative z-10">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <button
              className="site-menu-button md:hidden p-2 text-foreground relative z-50"
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen((value) => !value)}
              type="button"
            >
              <Icon name={isMenuOpen ? "close" : "menu"} className="w-6 h-6" />
            </button>
          </div>

          {isMenuOpen ? (
            <div className="md:hidden overflow-hidden">
              <ul className="mt-4 pb-4 flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href;

                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                          isActive
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </nav>
      </header>

      <section id="inicio" className="min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-20 w-full">
          <div className="text-center">
            <p className="text-primary font-medium mb-4">Hola, soy</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 text-balance">
              Andrea Perez
            </h1>

            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="h-px w-12 bg-primary/50" />
              <p className="text-xl md:text-2xl text-muted-foreground">
                Estudiante de Derecho
              </p>
              <span className="h-px w-12 bg-primary/50" />
            </div>

            <p className="text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto text-lg">
              Apasionada por el derecho internacional, los derechos humanos y la
              diplomacia. Actualmente estudio en la Universidad de Barcelona y
              participo activamente en organizaciones internacionales como el
              Parlamento Europeo de la Juventud y ELSA.
            </p>

            <div className="hero-actions flex flex-wrap justify-center gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
              >
                Contactar
                <Icon name="arrow-right" className="w-4 h-4 ml-2" />
              </a>

              <a
                href="#experiencia"
                className="inline-flex items-center px-8 py-4 border-2 border-border text-foreground rounded-full font-medium hover:border-primary hover:text-primary transition-all hover:scale-105 active:scale-95"
              >
                Ver Experiencia
              </a>
            </div>

            <div className="mt-20 flex justify-center">
              <a
                href="#sobre-mi"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Ir a Sobre Mi"
              >
                <Icon name="arrow-down" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="py-24 bg-card">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
            Sobre Mi
          </h2>

          <div className="about-grid grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                Soy estudiante de Derecho en la Universidad de Barcelona, con un
                profundo interes en el derecho internacional, los derechos
                humanos y la resolucion de conflictos.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                He representado a mi universidad en competiciones de debate y
                simulaciones de Naciones Unidas, donde he desarrollado
                habilidades de oratoria, negociacion y analisis juridico. Mi
                participacion en GIMUN en la sede de la ONU en Ginebra fue una
                experiencia transformadora.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Actualmente, continuo expandiendo mi formacion a traves de
                programas internacionales como SELS Viena, enfocado en
                resolucion de disputas.
              </p>

              <div className="mt-10 flex items-start gap-4 p-4 bg-background rounded-lg border border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon name="pin" className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Barcelona, Espana</p>
                  <p className="text-sm text-muted-foreground">
                    Universidad de Barcelona - Facultad de Derecho
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-8">Idiomas</h3>
              <div className="space-y-6">
                {languages.map((language) => (
                  <div key={language.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-foreground font-medium">
                        {language.name}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {language.level}
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${language.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
            Experiencia
          </h2>

          <div className="experience-grid grid md:grid-cols-2 gap-6">
            {experiences.map((experience) => (
              <div
                key={`${experience.date}-${experience.title}`}
                className={`relative p-6 rounded-xl border transition-all duration-300 cursor-default ${
                  experience.highlight
                    ? "bg-primary/5 border-primary/30 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
                    : "bg-card border-border hover:border-primary/50 hover:shadow-md"
                }`}
              >
                {experience.badge ? (
                  <span className="absolute top-4 right-4 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {experience.badge}
                  </span>
                ) : null}

                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      experience.highlight
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-primary"
                    }`}
                  >
                    <Icon name={experience.icon} className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <span className="font-medium text-primary">{experience.date}</span>
                      <span>•</span>
                      <span className="truncate">{experience.location}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {experience.organization}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Membresias y Actividades
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {memberships.map((membership) => (
                <span
                  key={membership}
                  className="px-5 py-2.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium cursor-default hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {membership}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="habilidades" className="py-24 bg-card">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
            Habilidades
          </h2>

          <div className="skills-grid grid md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="group p-6 bg-background rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon name={skill.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-5">
                  {skill.category}
                </h3>
                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-muted-foreground text-sm group-hover:text-foreground transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contacto
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Si tienes alguna pregunta o quieres conectar, no dudes en
              contactarme.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid gap-4">
              {contacts.map((contact) => {
                const Wrapper = contact.href ? "a" : "div";

                return (
                  <Wrapper
                    key={contact.label}
                    {...(contact.href ? { href: contact.href } : {})}
                    className={`flex items-center gap-5 p-5 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 ${
                      contact.href ? "cursor-pointer" : ""
                    }`}
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Icon name={contact.icon} className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">
                        {contact.label}
                      </p>
                      <p className="text-foreground font-medium">{contact.value}</p>
                    </div>
                    {contact.href ? (
                      <Icon
                        name="chevron-right"
                        className="w-5 h-5 text-muted-foreground"
                      />
                    ) : null}
                  </Wrapper>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <p className="text-muted-foreground mb-4">
                O copia mi email directamente
              </p>
              <button
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                onClick={copyEmail}
                type="button"
              >
                <Icon
                  name={copied ? "check" : "copy"}
                  className="w-5 h-5"
                />
                {copied ? "Copiado" : "Copiar Email"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Andrea Perez. Todos los derechos
              reservados.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${email}`}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Email"
              >
                <Icon name="mail" className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/50 text-center">
            <a
              href="#inicio"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon name="arrow-up" className="w-4 h-4" />
              Volver arriba
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
