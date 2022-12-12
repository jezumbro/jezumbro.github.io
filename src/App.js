import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import { Container, Image, Row } from 'react-bootstrap'

export const App = () => {
  useEffect(() => {
    fetch('https://api.zumbrohomestead.com/page-view', {
      method: 'POST',
      body: JSON.stringify({ page: 'about' }),
      headers: { 'Content-Type': 'application/json' },
    }).then((resp) => console.log(resp))
  }, [])

  return (
    <Container style={{ textAlign: 'center' }}>
      <Row>
        <h1>Zeke Zumbro</h1>
        <Row className="d-inline">
          <Container style={{ width: '300px' }}>
            <Image src="/images/about.jpg" alt="logo" fluid />
          </Container>
        </Row>
        <Row className="justify-content-center align-content-center text-white-50 font-monospace d-inline pt-2">
          Disc-Golfer. Dog-lover. Christ-follower.
        </Row>
      </Row>
      <Row className="pt-4 justify">
        <p>Enneagram 9 wing 1, who is loves doing thing the "right" way</p>
        <p>
          I am passionate about making processes, code, life better. I currently
          work at Beyond Pricing making the world better though dynamic pricing.
          I love exploring software and technology from unit test frameworks to
          3D printers and home.
        </p>
      </Row>
    </Container>
  )
}
