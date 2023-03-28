import { App } from './App'
import { Layout } from './components/layout/Layout'
import './index.css'
import React from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <head>
      <link rel="icon" href="/public/favicon.ico" />
    </head>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
)
// reportWebVitals(sendToAnalytics)
