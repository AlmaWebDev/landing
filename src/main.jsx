import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { SiteApp } from './App.jsx';
import './styles.css';

const root = document.getElementById('root');
const app = <SiteApp path={window.location.pathname} />;

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
