import { SiteFooter } from './SiteFooter'
import { SiteNavBar } from './SiteNavBar'
import React from 'react'
import { Container } from 'react-bootstrap'

export const Layout = ({ children }) => (
  <Container
    fluid
    className="main-content"
    style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
  >
    <SiteNavBar />
    <Container style={{ display: 'flex', flex: '1 0 auto' }}>
      {children}
    </Container>
    <SiteFooter />
  </Container>
)
