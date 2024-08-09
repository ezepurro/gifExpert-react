import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GifExpertApp from './GifExpertApp'

import './styles.css'

// rafc

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>,
)
