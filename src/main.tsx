import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RoutesGym from './routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutesGym />
  </StrictMode>,
)
