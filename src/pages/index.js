import { App } from '../components/App'
import { Layout } from '../components/layout'
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

const IndexPage = () => {
  return (
    <Layout>
      <App />
    </Layout>
  )
}
export default IndexPage

export const Head = () => <title>About Zeke Zumbro</title>
