import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './styles/index.css'

// Debug: global error handlers and startup logs to diagnose blank page on prod
try {
  const rootEl = document.getElementById('root')
  if (!rootEl) console.error('Debug: root element not found')
  else console.log('Debug: root element found')
} catch (e) {
  console.error('Debug: error checking root element', e)
}

window.addEventListener('error', (ev) => {
  try {
    // eslint-disable-next-line no-console
    console.error('Global error:', ev.error || ev.message, ev)
  } catch (err) {
    // ignore
  }
})

window.addEventListener('unhandledrejection', (ev) => {
  try {
    // eslint-disable-next-line no-console
    console.error('Unhandled rejection:', ev.reason)
  } catch (err) {
    // ignore
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Post-render debug tick
setTimeout(() => console.log('Debug: initial render attempted'), 1000)