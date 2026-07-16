import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import CentralDomePage from './pages/CentralDomePage.tsx'
import BackSidePage from './pages/BackSidePage.tsx'
import IslandOceanPage from './pages/IslandOceanPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dome" element={<CentralDomePage />} />
        <Route path="/back-side" element={<BackSidePage />} />
        <Route path="/island-ocean" element={<IslandOceanPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
