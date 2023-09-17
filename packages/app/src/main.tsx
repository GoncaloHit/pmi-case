import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from 'ui'

ReactDOM.createRoot(
  document.getElementById('root')!)
  .render(
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={lightTheme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>,
  )
