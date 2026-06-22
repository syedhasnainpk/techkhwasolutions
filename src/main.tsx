import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Lenis from 'lenis'

const lenis = new Lenis({
  duration: 1.4,
  easing: (t: number) => 1 - Math.pow(1 - t, 4),
  smoothWheel: true,
  wheelMultiplier: 1.0,
  touchMultiplier: 1.5,
})

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
