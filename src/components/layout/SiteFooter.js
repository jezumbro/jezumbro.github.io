import { Col, Container, Navbar, Row } from 'react-bootstrap'

const YearComponent = () => (
  <h6 style={{ whiteSpace: 'nowrap' }}>
    © {new Date().getFullYear()} Zeke Zumbro
  </h6>
)

export const SiteFooter = () => (
  <footer className="sticky-bottom pt-2" style={{ flexShrink: 0 }}>
    <Navbar color="dark" variant="dark" className="bg-transparent">
      <Container className="justify-content-center">
        <Row md={8}>
          <Col>
            <YearComponent />
          </Col>
        </Row>
      </Container>
    </Navbar>
  </footer>
)
