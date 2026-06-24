import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Lenis from 'lenis'

const lenis = new Lenis({
  lerp: 0.1,
  smoothWheel: true,
  wheelMultiplier: 1.0,
  touchMultiplier: 1.5,
  syncTouch: true,
  syncTouchLerp: 0.075,
  infinite: false,
})

// Expose lenis globally so pages can reset scroll position on route change
;(window as unknown as Record<string, unknown>).lenis = lenis

let rafId: number
function raf(time: number) {
  lenis.raf(time)
  rafId = requestAnimationFrame(raf)
}
rafId = requestAnimationFrame(raf)

// Silence unused variable warning
void rafId

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
