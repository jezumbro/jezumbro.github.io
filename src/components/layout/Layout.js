import { SiteFooter } from './SiteFooter'
import { SiteNavBar } from './SiteNavBar'
import { Container } from 'react-bootstrap'

export const Layout = ({ children }) => (
  <Container
    fluid
    className="layout"
    style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
  >
    <SiteNavBar />
    <Container style={{ display: 'flex', flex: '1 0 auto' }}>
      {children}
    </Container>
    <SiteFooter />
  </Container>
)
