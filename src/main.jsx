import { App } from './components/App'
import { Layout } from './components/layout'
import './index.css'
import posthog from 'posthog-js'
import React from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))
posthog.init('phc_1P0jj11b9N17pkpp9Z8CV5Wp7UHV8NZRlLunUFaU6pa', {
  autocapture: false,
})
root.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
)
// reportWebVitals(sendToAnalytics)
