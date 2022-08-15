import { SiteFooter } from './SiteFooter'
import { SiteNavBar } from './SiteNavBar'
import { Container } from 'react-bootstrap'

export const Layout = ({ children }) => (
  <>
    <SiteNavBar />
    <Container>{children}</Container>
    <SiteFooter />
  </>
)
