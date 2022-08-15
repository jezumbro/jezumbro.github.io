import { Col, Container, Navbar, Row } from 'react-bootstrap'

const YearComponent = () => {
  const today = new Date()
  return (
    <h6 style={{ whiteSpace: 'nowrap' }}>
      © {today.getFullYear()} Zeke Zumbro
    </h6>
  )
}
export const SiteFooter = () => {
  return (
    <footer className="sticky-bottom pt-2">
      <Navbar color="dark" variant="dark" className="bg-transparent">
        <Container className="justify-content-center">
          <Row md={8}>
            <Col>
              <YearComponent />
            </Col>
            <Col>
              <a href="https://reactjs.org/">React</a>
            </Col>
            <Col>
              <a href="https://fastapi.tiangolo.com/">FastAPI</a>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </footer>
  )
}
