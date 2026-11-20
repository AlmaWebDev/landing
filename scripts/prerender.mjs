import fs from 'node:fs/promises';
import path from 'node:path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';

const siteUrl = 'https://almaweb.dev';
const email = 'almawebdev@gmail.com';
const freelancerUrl = 'https://www.freelancer.com/u/acruzcontreras';
const routes = [
  {
    path: '/',
    title: 'AlmaWeb | Tiendas online y desarrollo web a medida',
    description: 'AlmaWeb diseña y desarrolla tiendas online, sitios web y soluciones digitales a medida para negocios.',
    type: 'WebPage',
    name: 'Inicio',
  },
  {
    path: '/proyectos/',
    title: 'Proyectos web y tiendas online | Portafolio AlmaWeb',
    description: 'Explora proyectos de AlmaWeb: tiendas online, sitios web y plataformas digitales a medida, incluidos proyectos desarrollados con React.',
    type: 'CollectionPage',
    name: 'Proyectos',
  },
  {
    path: '/servicios/',
    title: 'Servicios de desarrollo web y e-commerce | AlmaWeb',
    description: 'Desarrollo de tiendas online, sitios web a medida, CMS, mantenimiento y soporte para negocios.',
    type: 'CollectionPage',
    name: 'Servicios',
  },
  {
    path: '/nosotros/',
    title: 'Quiénes somos | Alexander y Miguel Ángel Cruz — AlmaWeb',
    description: 'Conoce a Alexander y Miguel Ángel Cruz, hermanos desarrolladores web y el equipo detrás de AlmaWeb.',
    type: 'AboutPage',
    name: 'Nosotros',
  },
  {
    path: '/contacto/',
    title: 'Contacto | Hablemos de tu proyecto web — AlmaWeb',
    description: 'Contacta directamente a AlmaWeb para hablar de tu tienda online, sitio web o solución digital a medida.',
    type: 'ContactPage',
    name: 'Contacto',
  },
];

const pageSchemas = {
  '/proyectos/': {
    mainEntity: {
      '@type': 'ItemList',
      name: 'Proyectos web de AlmaWeb',
      itemListElement: [
        'Proyecto e-commerce 01',
        'Proyecto web 02',
        'Proyecto e-commerce 03',
        'Proyecto e-commerce 04',
        'Proyecto e-commerce 05',
        'Proyecto CMS 06',
        'Almacenes Sogo',
        'The Collective Choir',
        'Flexitours Medellín',
        'Beauty Top Dogs',
      ].map((name, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name,
      })),
    },
  },
  '/servicios/': {
    mainEntity: {
      '@type': 'ItemList',
      name: 'Servicios de AlmaWeb',
      itemListElement: [
        'Tiendas online',
        'Desarrollo a medida',
        'CMS y contenido',
        'Soporte y evolución',
      ].map((name, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: { '@type': 'Service', name, provider: { '@id': `${siteUrl}/#organization` } },
      })),
    },
  },
  '/nosotros/': {
    mainEntity: [
      { '@type': 'Person', name: 'Alexander Cruz', jobTitle: 'Desarrollador web' },
      { '@type': 'Person', name: 'Miguel Ángel Cruz', jobTitle: 'Desarrollador web' },
    ],
  },
  '/contacto/': {
    mainEntity: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email,
      url: `${siteUrl}/contacto/`,
      availableLanguage: ['Spanish'],
    },
  },
};

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function buildStructuredData(route) {
  const canonical = `${siteUrl}${route.path}`;
  const organization = {
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'AlmaWeb',
    url: `${siteUrl}/`,
    logo: { '@type': 'ImageObject', url: `${siteUrl}/almaweb-logo.svg` },
    email,
    sameAs: [freelancerUrl],
  };
  const website = {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: `${siteUrl}/`,
    name: 'AlmaWeb',
    publisher: { '@id': `${siteUrl}/#organization` },
    inLanguage: 'es-CO',
  };
  const page = {
    '@type': route.type,
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: route.title,
    description: route.description,
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': `${siteUrl}/#organization` },
    inLanguage: 'es-CO',
    ...(pageSchemas[route.path] || {}),
  };
  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${siteUrl}/` },
      ...(route.path === '/' ? [] : [{ '@type': 'ListItem', position: 2, name: route.name, item: canonical }]),
    ],
  };
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': [organization, website, page, breadcrumb] })
    .replaceAll('<', '\\u003c');
}

function createDocument(route, body, assets, { notFound = false } = {}) {
  const canonical = `${siteUrl}${route.path}`;
  const description = notFound
    ? 'La página que buscas no está disponible. Vuelve al inicio de AlmaWeb.'
    : route.description;
  const title = notFound ? 'Página no encontrada | AlmaWeb' : route.title;
  const robots = notFound ? 'noindex, follow' : 'index, follow, max-image-preview:large';
  const css = assets.css.map((file) => `    <link rel="stylesheet" crossorigin href="/${file}" />`).join('\n');
  const structuredData = notFound ? '' : `\n    <script type="application/ld+json">${buildStructuredData(route)}</script>`;

  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#f7f7f2" />
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="${robots}" />
    ${notFound ? '' : `<link rel="canonical" href="${canonical}" />`}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="AlmaWeb" />
    <meta property="og:locale" content="es_CO" />
    ${notFound ? '' : `<meta property="og:url" content="${canonical}" />`}
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${siteUrl}/almaweb-logo.svg" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <title>${escapeHtml(title)}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="icon" type="image/svg+xml" href="/almaweb-logo.svg" />
${css}${structuredData}
  </head>
  <body>
    <div id="root">${body}</div>
    <script type="module" crossorigin src="/${assets.entry}"></script>
  </body>
</html>
`;
}

const vite = await createServer({
  configFile: path.resolve('vite.config.js'),
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

try {
  const { SiteApp } = await vite.ssrLoadModule('/src/App.jsx');
  const manifest = JSON.parse(await fs.readFile('docs/.vite/manifest.json', 'utf8'));
  const entry = manifest['index.html'];
  if (!entry?.file) throw new Error('Vite build manifest does not contain the site entry point.');
  const assets = { entry: entry.file, css: entry.css || [] };

  for (const route of routes) {
    const markup = renderToStaticMarkup(React.createElement(SiteApp, { path: route.path }));
    const html = createDocument(route, markup, assets);
    if (route.path === '/') {
      await fs.writeFile('docs/index.html', html);
    } else {
      const destination = path.join('docs', route.path.slice(1), 'index.html');
      await fs.mkdir(path.dirname(destination), { recursive: true });
      await fs.writeFile(destination, html);
    }
  }

  const notFoundRoute = {
    path: '/404.html',
    title: 'Página no encontrada | AlmaWeb',
    description: 'La página que buscas no está disponible.',
  };
  const notFoundMarkup = renderToStaticMarkup(React.createElement(SiteApp, { path: '/404' }));
  await fs.writeFile('docs/404.html', createDocument(notFoundRoute, notFoundMarkup, assets, { notFound: true }));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map((route) => `  <url><loc>${siteUrl}${route.path}</loc></url>`)
    .join('\n')}\n</urlset>\n`;
  await fs.writeFile('docs/sitemap.xml', sitemap);
  await fs.writeFile('docs/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
  await fs.rm('docs/.vite', { recursive: true, force: true });
  console.log(`Prerendered ${routes.length} indexable pages plus a noindex 404 page.`);
} finally {
  await vite.close();
}
