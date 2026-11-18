import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const email = 'almawebdev@gmail.com';
const raw = 'https://raw.githubusercontent.com/AlmaWebDev/landing/main';

const projects = [
  {
    title: 'Proyecto e-commerce 01',
    category: 'Tiendas online',
    technology: 'PrestaShop',
    image: `${raw}/img/portfolio/pr1.png`,
    imageAlt: 'Vista de un proyecto de tienda online',
    type: 'store',
  },
  {
    title: 'Proyecto web 02',
    category: 'Sitios web',
    technology: 'Desarrollo web',
    image: `${raw}/img/portfolio/pr2.png`,
    imageAlt: 'Vista de un proyecto web',
    type: 'web',
  },
  {
    title: 'Proyecto e-commerce 03',
    category: 'Tiendas online',
    technology: 'PrestaShop',
    image: `${raw}/img/portfolio/pr3.png`,
    imageAlt: 'Vista de una tienda online',
    type: 'store',
  },
  {
    title: 'Proyecto e-commerce 04',
    category: 'Tiendas online',
    technology: 'PrestaShop',
    image: `${raw}/img/portfolio/pr4.png`,
    imageAlt: 'Vista de una tienda online',
    type: 'store',
  },
  {
    title: 'Proyecto e-commerce 05',
    category: 'Tiendas online',
    technology: 'PrestaShop',
    image: `${raw}/img/portfolio/pr5.png`,
    imageAlt: 'Vista de una tienda online',
    type: 'store',
  },
  {
    title: 'Proyecto CMS 06',
    category: 'CMS',
    technology: 'WordPress',
    image: `${raw}/img/portfolio/pr6.png`,
    imageAlt: 'Vista de un proyecto con CMS',
    type: 'web',
  },
  {
    title: 'Almacenes Sogo',
    category: 'Plataforma a medida',
    technology: 'React · gestión',
    url: 'https://almacenes.sogo.es/',
    type: 'sogo',
    visual: 'sogo',
  },
  {
    title: 'The Collective Choir',
    category: 'Sitio web a medida',
    technology: 'React · música y eventos',
    image: 'https://media.base44.com/images/public/69f09c8cfedfbe6b2c3ec1e7/9ace150f7_aboutus.png',
    imageAlt: 'Integrantes de The Collective Choir',
    url: 'https://thecollectivechoir.com/',
    type: 'web',
  },
  {
    title: 'Flexitours Medellín',
    category: 'Sitio web a medida',
    technology: 'React · turismo',
    image: 'https://api.flexitoursmedellin.com/api/optimized-images/78902866538dee3aacee7958a7bfc885.png',
    imageAlt: 'Experiencia turística en Guatapé',
    url: 'https://flexitoursmedellin.com/',
    type: 'web',
  },
  {
    title: 'Beauty Top Dogs',
    category: 'Sitio web a medida',
    technology: 'React · mascotas',
    image: 'https://api.beautytopdogs.com/uploads/c9f12e9968e0d41d91e90d42d765332b.png',
    imageAlt: 'Cachorro de Beauty Top Dogs',
    url: 'https://beautytopdogs.com/',
    type: 'web',
  },
];

const services = [
  {
    number: '01',
    icon: '↗',
    title: 'Tiendas online',
    text: 'E-commerce en PrestaShop y WordPress, módulos y plugins pensados para vender mejor.',
  },
  {
    number: '02',
    icon: '⌘',
    title: 'Desarrollo a medida',
    text: 'Sitios y aplicaciones web que se adaptan a los procesos reales de tu negocio.',
  },
  {
    number: '03',
    icon: '◉',
    title: 'CMS y contenido',
    text: 'WordPress y otros gestores con una experiencia clara para publicar y administrar.',
  },
  {
    number: '04',
    icon: '↻',
    title: 'Soporte y evolución',
    text: 'Mantenimiento, mejoras y acompañamiento para que tu sitio siga trabajando contigo.',
  },
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ['Proyectos', '#proyectos'],
    ['Servicios', '#servicios'],
    ['Nosotros', '#nosotros'],
  ];

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="AlmaWeb, inicio">
        <img className="brand-logo" src="/almaweb-logo.svg" alt="" />
        <span>almaweb<span className="brand-dot">.</span></span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
      </button>
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegación principal">
        {links.map(([label, href]) => (
          <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
        <a className="nav-cta" href="#contacto" onClick={() => setMenuOpen(false)}>
          Hablemos <Arrow diagonal />
        </a>
      </nav>
    </header>
  );
}

function SogoPreview() {
  return (
    <div className="sogo-preview" aria-label="Vista gráfica del proyecto Almacenes Sogo">
      <div className="mock-browser">
        <div className="mock-dots"><i /><i /><i /></div>
        <span>almacenes.sogo.es</span>
        <span className="mock-lock">⌑</span>
      </div>
      <div className="sogo-content">
        <span className="sogo-label">PLATAFORMA DIGITAL</span>
        <strong>ALMACENES<br />SOGO<span>.</span></strong>
        <span className="sogo-rule" />
        <small>Un espacio para cada equipo.</small>
        <span className="sogo-button">ENTRAR →</span>
      </div>
      <span className="sogo-orb" />
      <span className="sogo-grid" />
    </div>
  );
}

function ProjectCard({ project, index }) {
  const preview = project.visual === 'sogo'
    ? <SogoPreview />
    : <img src={project.image} alt={project.imageAlt} loading="lazy" />;
  const card = (
    <>
      <div className={`project-visual project-${project.visual || 'image'}`}>
        {preview}
        <span className="project-open" aria-hidden="true"><Arrow diagonal /></span>
      </div>
      <div className="project-info">
        <div>
          <p className="project-category">{project.category}</p>
          <h3>{project.title}</h3>
          <span className="project-tech">{project.technology}</span>
        </div>
        <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
      </div>
    </>
  );

  return project.url ? (
    <a
      className={`project-card ${project.visual === 'sogo' ? 'sogo-card' : ''}`}
      href={project.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Visitar proyecto ${project.title}`}
    >
      {card}
    </a>
  ) : <article className="project-card">{card}</article>;
}

function Projects() {
  const [filter, setFilter] = useState('Todos');
  const filters = ['Todos', 'Tiendas online', 'Sitios web'];
  const filtered = projects.filter((project) => {
    if (filter === 'Todos') return true;
    if (filter === 'Tiendas online') return project.type === 'store';
    return project.type === 'web' || project.type === 'sogo';
  });

  return (
    <section className="section projects-section" id="proyectos">
      <div className="section-topline">
        <span className="eyebrow">TRABAJO SELECCIONADO</span>
        <span className="section-note">Una muestra de lo que hacemos</span>
      </div>
      <div className="section-heading projects-heading">
        <h2>Ideas que ya<br /><span>están en marcha.</span></h2>
        <p>Tiendas, plataformas y experiencias digitales creadas para resolver necesidades distintas.</p>
      </div>
      <div className="project-filters" role="group" aria-label="Filtrar proyectos">
        {filters.map((item) => (
          <button
            type="button"
            className={filter === item ? 'filter-button active' : 'filter-button'}
            onClick={() => setFilter(item)}
            key={item}
            aria-pressed={filter === item}
          >
            {item}<span>{item === 'Todos' ? '10' : item === 'Tiendas online' ? '4' : '6'}</span>
          </button>
        ))}
      </div>
      <div className="project-grid">
        {filtered.map((project, index) => <ProjectCard project={project} index={projects.indexOf(project)} key={project.title} />)}
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="status-dot" /> ESTUDIO DIGITAL · COLOMBIA</div>
            <h1>Tu negocio<br />merece una web<br /><span>hecha a su medida.</span></h1>
            <p>Diseñamos y desarrollamos tiendas online y sitios web que hacen más fácil el día a día de tu negocio.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#proyectos">Explorar proyectos <Arrow diagonal /></a>
              <a className="text-link light-link" href="#contacto">Cuéntanos tu idea <Arrow /></a>
            </div>
            <div className="hero-footnote"><span>Desde 2011</span><span className="footnote-line" /><span>Desarrollo web con propósito</span></div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-star star-one">✳</div>
            <div className="art-star star-two">✳</div>
            <div className="art-card art-card-back"><div className="art-top"><span /><span /><span /></div><div className="art-skeleton wide" /><div className="art-skeleton" /><div className="art-skeleton short" /><div className="art-blocks"><i /><i /><i /></div></div>
            <div className="art-card art-card-front">
              <div className="art-top"><span /><span /><span /><b>almaweb</b></div>
              <div className="art-display">
                <div className="art-pill">DISEÑO · CÓDIGO · RESULTADOS</div>
                <div className="art-title">Todo empieza<br />con una buena<br /><i>idea.</i></div>
                <div className="art-link">Conócenos <Arrow diagonal /></div>
              </div>
              <div className="art-bottom"><span>01 — 04</span><span>WEBS A MEDIDA</span></div>
            </div>
            <div className="hero-sticker"><span>hecho</span><b>a tu<br />medida</b><i>✳</i></div>
            <div className="hero-side-label">DIGITAL, PERO PERSONAL</div>
          </div>
          <div className="hero-index"><span>01</span><i /> 04</div>
        </section>

        <div className="trust-strip">
          <span>IDEAS CLARAS</span><i>✳</i><span>CÓDIGO CUIDADO</span><i>✳</i><span>TRATO DIRECTO</span><i>✳</i><span>RESULTADOS REALES</span>
        </div>

        <Projects />

        <section className="services-section" id="servicios">
          <div className="section section-inner">
            <div className="section-topline">
              <span className="eyebrow">QUÉ PODEMOS HACER POR TI</span>
              <span className="section-note">Tecnología útil, sin complicaciones</span>
            </div>
            <div className="section-heading">
              <h2>Lo digital debe<br /><span>trabajar para ti.</span></h2>
              <p>Desde la primera idea hasta el siguiente paso: te acompañamos con soluciones útiles y soporte cercano.</p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-top"><span>{service.number}</span><span className="service-icon">{service.icon}</span></div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="service-line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section" id="nosotros">
          <div className="about-image-wrap">
            <figure className="about-person-photo">
              <img src={`${raw}/img/team/nuevo_alex.png`} alt="Alexander Cruz, cofundador de AlmaWeb" loading="lazy" />
              <figcaption><span>DESARROLLO WEB</span><strong>Alexander Cruz</strong></figcaption>
            </figure>
            <figure className="about-person-photo">
              <img src={`${raw}/img/team/mac_2026.png`} alt="Miguel Ángel Cruz, cofundador de AlmaWeb" loading="lazy" />
              <figcaption><span>DESARROLLO WEB</span><strong>Miguel Ángel Cruz</strong></figcaption>
            </figure>
          </div>
          <div className="about-copy">
            <span className="eyebrow">QUIÉNES SOMOS</span>
            <h2>Tu equipo web,<br /><span>sin intermediarios.</span></h2>
            <p className="about-lead">Somos Alexander y Miguel Ángel Cruz, dos hermanos desarrolladores que trabajamos contigo de principio a fin.</p>
            <p>Alexander es Ingeniero de Sistemas y empezó su recorrido como analista y programador en 2004. Desde 2011 se dedica al desarrollo web; junto a Miguel Ángel ha creado tiendas online, sitios web y soluciones digitales para negocios.</p>
            <a className="text-link dark-link" href="https://www.freelancer.com/u/acruzcontreras" target="_blank" rel="noreferrer">Ver perfil de Freelancer <Arrow diagonal /></a>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="contact-orb" />
          <div className="contact-content">
            <span className="eyebrow">¿TIENES ALGO EN MENTE?</span>
            <h2>Hablemos de<br /><span>lo que quieres crear.</span></h2>
            <p>Cuéntanos qué necesitas. Te responderemos directamente, sin formularios eternos.</p>
            <a className="button button-primary" href={`mailto:${email}?subject=${encodeURIComponent('Hablemos de mi proyecto')}`}>
              Escríbenos <Arrow diagonal />
            </a>
          </div>
          <div className="contact-details">
            <span>CONTACTO DIRECTO</span>
            <a href={`mailto:${email}`}>{email} <Arrow diagonal /></a>
            <a href="https://www.freelancer.com/u/acruzcontreras" target="_blank" rel="noreferrer">Perfil de Freelancer <Arrow diagonal /></a>
          </div>
          <span className="contact-spark" aria-hidden="true">✳</span>
        </section>
      </main>
      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio"><img className="brand-logo" src="/almaweb-logo.svg" alt="" /><span>almaweb<span className="brand-dot">.</span></span></a>
        <span>Tiendas online y sitios web a medida.</span>
        <a className="back-top" href="#inicio">Volver arriba ↑</a>
        <small>© {new Date().getFullYear()} AlmaWebDev</small>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
