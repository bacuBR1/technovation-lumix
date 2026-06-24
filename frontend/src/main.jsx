import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './pages/pages-adm/Home/Home.jsx'
import ManipularEditais from './pages/pages-adm/manipularEditais/manipularEditais.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manipular-editais" element={<ManipularEditais />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
