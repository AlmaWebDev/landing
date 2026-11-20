import React, { useState } from 'react';

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

function Header({ currentPath = '/' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ['Proyectos', '/proyectos/'],
    ['Servicios', '/servicios/'],
    ['Nosotros', '/nosotros/'],
  ];

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="AlmaWeb, inicio">
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
          <a href={href} key={href} aria-current={currentPath === href ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
        <a className="nav-cta" href="/contacto/" aria-current={currentPath === '/contacto/' ? 'page' : undefined} onClick={() => setMenuOpen(false)}>
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
            {item}<span>{item === 'Todos' ? projects.length : filteredCount(item)}</span>
          </button>
        ))}
      </div>
      <div className="project-grid">
        {filtered.map((project, index) => <ProjectCard project={project} index={projects.indexOf(project)} key={project.title} />)}
      </div>
    </section>
  );
}

function filteredCount(filter) {
  if (filter === 'Tiendas online') return projects.filter((project) => project.type === 'store').length;
  return projects.filter((project) => project.type === 'web' || project.type === 'sogo').length;
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="brand footer-brand" href="/"><img className="brand-logo" src="/almaweb-logo.svg" alt="" /><span>almaweb<span className="brand-dot">.</span></span></a>
      <span>Tiendas online y sitios web a medida.</span>
      <a className="back-top" href="/">Volver al inicio ↑</a>
      <small>© AlmaWebDev</small>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <Header currentPath="/" />
      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="status-dot" /> ESTUDIO DIGITAL · COLOMBIA</div>
            <h1>Tu negocio<br />merece una web<br /><span>hecha a su medida.</span></h1>
            <p>Diseñamos y desarrollamos tiendas online y sitios web que hacen más fácil el día a día de tu negocio.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="/proyectos/">Explorar proyectos <Arrow diagonal /></a>
              <a className="text-link light-link" href="/contacto/">Cuéntanos tu idea <Arrow /></a>
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
      <SiteFooter />
    </>
  );
}

function RouteLayout({ path, children }) {
  return (
    <>
      <Header currentPath={path} />
      <main className="route-main">{children}</main>
      <SiteFooter />
    </>
  );
}

function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="page-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}

function ProjectsPage() {
  return (
    <RouteLayout path="/proyectos/">
      <PageIntro
        eyebrow="PORTAFOLIO ALMAWEB"
        title="Proyectos web y tiendas online"
        description="Conoce tiendas online, sitios web y plataformas digitales que hemos creado para distintos negocios y comunidades."
      />
      <Projects />
      <section className="route-cta">
        <h2>¿Tienes un proyecto parecido?</h2>
        <p>Cuéntanos qué necesitas y conversemos sobre una solución a tu medida.</p>
        <a className="button button-primary" href="/contacto/">Hablemos de tu proyecto <Arrow diagonal /></a>
      </section>
    </RouteLayout>
  );
}

function ServicesPage() {
  return (
    <RouteLayout path="/servicios/">
      <PageIntro
        eyebrow="SERVICIOS DE DESARROLLO WEB"
        title="Soluciones digitales para hacer crecer tu negocio"
        description="Diseño y desarrollo web, tiendas online, plataformas a medida y soporte para que tu presencia digital responda a las necesidades reales de tu negocio."
      />
      <section className="services-section route-services">
        <div className="section section-inner">
          <div className="section-topline">
            <span className="eyebrow">CÓMO PODEMOS AYUDARTE</span>
            <span className="section-note">Tecnología útil, sin complicaciones</span>
          </div>
          <div className="service-detail-grid">
            {services.map((service) => (
              <article className="service-detail-card" key={service.number}>
                <span className="service-detail-number">{service.number}</span>
                <span className="service-icon" aria-hidden="true">{service.icon}</span>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
                <p>
                  Analizamos lo que necesitas, proponemos una solución clara y te acompañamos
                  durante su implementación y evolución.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="route-cta">
        <h2>Empecemos por lo que necesitas</h2>
        <p>Conversemos sobre tu idea, tus procesos y el siguiente paso para tu sitio web.</p>
        <a className="button button-primary" href="/contacto/">Solicitar una conversación <Arrow diagonal /></a>
      </section>
    </RouteLayout>
  );
}

function AboutPage() {
  return (
    <RouteLayout path="/nosotros/">
      <PageIntro
        eyebrow="QUIÉNES SOMOS"
        title="Un equipo web cercano, de principio a fin"
        description="Somos Alexander y Miguel Ángel Cruz, hermanos y desarrolladores. Trabajamos directamente contigo para crear y mantener soluciones digitales a la medida."
      />
      <section className="about-section section route-about">
        <div className="about-image-wrap">
          <figure className="about-person-photo">
            <img src={`${raw}/img/team/nuevo_alex.png`} alt="Alexander Cruz, desarrollador web de AlmaWeb" />
            <figcaption><span>DESARROLLO WEB</span><strong>Alexander Cruz</strong></figcaption>
          </figure>
          <figure className="about-person-photo">
            <img src={`${raw}/img/team/mac_2026.png`} alt="Miguel Ángel Cruz, desarrollador web de AlmaWeb" />
            <figcaption><span>DESARROLLO WEB</span><strong>Miguel Ángel Cruz</strong></figcaption>
          </figure>
        </div>
        <div className="about-copy">
          <span className="eyebrow">EXPERIENCIA Y TRATO DIRECTO</span>
          <h2>Personas detrás<br /><span>de cada proyecto.</span></h2>
          <p className="about-lead">Somos Alexander y Miguel Ángel Cruz, dos hermanos desarrolladores que trabajamos contigo de principio a fin.</p>
          <p>Alexander es Ingeniero de Sistemas y empezó su recorrido como analista y programador en 2004. Desde 2011 se dedica al desarrollo web; junto a Miguel Ángel ha creado tiendas online, sitios web y soluciones digitales para negocios.</p>
          <p>En AlmaWeb hablas directamente con quienes diseñan y construyen tu solución. Así podemos entender mejor tu operación y acompañar cada etapa del proyecto.</p>
          <a className="text-link dark-link" href="https://www.freelancer.com/u/acruzcontreras" target="_blank" rel="noreferrer">Ver perfil de Freelancer <Arrow diagonal /></a>
        </div>
      </section>
      <section className="route-cta">
        <h2>Hablemos de lo que quieres crear</h2>
        <p>Cuéntanos sobre tu negocio y encontraremos juntos el siguiente paso.</p>
        <a className="button button-primary" href="/contacto/">Contactar a AlmaWeb <Arrow diagonal /></a>
      </section>
    </RouteLayout>
  );
}

function ContactPage() {
  return (
    <RouteLayout path="/contacto/">
      <PageIntro
        eyebrow="CONTACTO DIRECTO"
        title="Hablemos de tu próximo proyecto web"
        description="Cuéntanos qué quieres crear o mejorar. En AlmaWeb te responderemos directamente para entender tus necesidades y conversar sobre una solución."
      />
      <section className="contact-page-content">
        <div className="contact-page-copy">
          <span className="eyebrow">SIN FORMULARIOS ETERNOS</span>
          <h2>Una conversación<br /><span>es un buen comienzo.</span></h2>
          <p>Escríbenos con una breve descripción de tu idea, tu tienda online o el sitio web que necesitas. Te responderemos por correo.</p>
          <a className="button button-primary" href={`mailto:${email}?subject=${encodeURIComponent('Hablemos de mi proyecto')}`}>
            Escribir a AlmaWeb <Arrow diagonal />
          </a>
        </div>
        <div className="contact-page-details">
          <span>CONTACTO</span>
          <a href={`mailto:${email}`}>{email} <Arrow diagonal /></a>
          <a href="https://www.freelancer.com/u/acruzcontreras" target="_blank" rel="noreferrer">Perfil de Freelancer <Arrow diagonal /></a>
          <p>Desarrollo de tiendas online, sitios web a medida, plataformas y soporte digital.</p>
        </div>
      </section>
    </RouteLayout>
  );
}

function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="not-found-page">
        <span className="eyebrow">404 · PÁGINA NO ENCONTRADA</span>
        <h1>Esta página no está disponible.</h1>
        <p>Puede que el enlace haya cambiado. Vuelve al inicio para explorar AlmaWeb.</p>
        <a className="button button-primary" href="/">Ir al inicio <Arrow diagonal /></a>
      </main>
      <SiteFooter />
    </>
  );
}

export function SiteApp({ path = '/' }) {
  const normalizedPath = path === '/' ? '/' : `/${path.split('/').filter(Boolean).join('/')}/`;
  if (normalizedPath === '/') return <HomePage />;
  if (normalizedPath === '/proyectos/') return <ProjectsPage />;
  if (normalizedPath === '/servicios/') return <ServicesPage />;
  if (normalizedPath === '/nosotros/') return <AboutPage />;
  if (normalizedPath === '/contacto/') return <ContactPage />;
  return <NotFoundPage />;
}
