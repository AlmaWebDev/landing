# AlmaWeb landing

Landing page de AlmaWeb construida con React y Vite. El contenido compilado para GitHub Pages se genera en `docs/`.

## Desarrollo

```bash
npm install
npm run dev
```

## Compilar para GitHub Pages

```bash
npm run build
```

El comando compila la portada de React y genera HTML prerenderizado para `/proyectos/`, `/servicios/`, `/nosotros/` y `/contacto/`. Cada ruta incluye título, descripción, canonical, Open Graph y datos estructurados propios. También genera `docs/sitemap.xml`, `docs/robots.txt` y una página 404 con `noindex`.

En **Settings → Pages**, selecciona **Deploy from a branch**, `main` y la carpeta **`/docs`**. El archivo `docs/CNAME` conserva el dominio `almaweb.dev`.

Los proyectos enlazados abren el sitio de cada cliente en una pestaña nueva. Las seis capturas existentes se cargan desde la carpeta pública de imágenes de este repositorio. Las páginas prerenderizadas incluyen su contenido principal en el HTML inicial y se hidratan con React al cargarse.
