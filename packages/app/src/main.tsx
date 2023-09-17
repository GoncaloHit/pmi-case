import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from 'ui'
import { GlobalStyles } from './theme/index'
import { Provider } from 'react-redux'
import { store } from './store/index'

ReactDOM.createRoot(
  document.getElementById('root')!)
  .render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyles />
          <ThemeProvider theme={lightTheme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  )
