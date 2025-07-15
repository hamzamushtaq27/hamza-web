import { createRoot } from 'react-dom/client'
import './global.css'
import Router from './Components/Router/Router.tsx'
import { Providers } from './Components/Provider/index.tsx';

createRoot(document.getElementById("root")!).render(
  <Providers>
    <Router />
  </Providers>,
);