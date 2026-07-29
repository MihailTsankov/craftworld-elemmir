import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import CentralDomePage from './pages/CentralDomePage.tsx'
import BackSidePage from './pages/BackSidePage.tsx'
import IslandOceanPage from './pages/IslandOceanPage.tsx'
import SmallIslandPage from './pages/SmallIslandPage.tsx'
import ExoditePlanetPage from './pages/ExoditePlanetPage.tsx'
import HangingGardensPage from './pages/HangingGardensPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dome" element={<CentralDomePage />} />
        <Route path="/back-side" element={<BackSidePage />} />
        <Route path="/island-ocean" element={<IslandOceanPage />} />
        <Route path="/small-island" element={<SmallIslandPage />} />
        <Route path="/exodite-planet" element={<ExoditePlanetPage />} />
        <Route path="/hanging-gardens" element={<HangingGardensPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
