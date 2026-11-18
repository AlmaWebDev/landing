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

En **Settings → Pages**, selecciona **Deploy from a branch**, `main` y la carpeta **`/docs`**. El archivo `docs/CNAME` conserva el dominio `almaweb.dev`.

Los proyectos enlazados abren el sitio de cada cliente en una pestaña nueva. Las seis capturas existentes se cargan desde la carpeta pública de imágenes de este repositorio.
