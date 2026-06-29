import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './pages/pages-adm/Home/Home.jsx'
import ManipularEditais from './pages/pages-adm/manipularEditais/manipularEditais.jsx'
import VerEditais from './pages/pages-adm/verEditais/verEditais.jsx'
import ManipularAlunos from './pages/pages-adm/manipular-alunos/manipularAlunos.jsx'
import VerAlunos from './pages/pages-adm/verAlunos/verAlunos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manipular-editais" element={<ManipularEditais />} />
        <Route path="/ver-editais" element={<VerEditais />} />
        <Route path='/manipular-alunos' element={<ManipularAlunos />} />
        <Route path='/ver-alunos' element={<VerAlunos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
