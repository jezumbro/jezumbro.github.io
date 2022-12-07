import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Image, Row } from 'react-bootstrap'

export const App = () => {
  return (
    <Container style={{ textAlign: 'center' }}>
      <Row>
        <h1>Zeke Zumbro</h1>
        <Row className="d-inline">
          <Container style={{ width: '300px' }}>
            <Image src="/images/sophie_small.jpeg" alt="logo" fluid />
          </Container>
        </Row>
        <Row className="justify-content-center align-content-center text-white-50 font-monospace d-inline pt-2">
          Disc-Golfer. Engineer. Dog-lover. Christ-follower.
        </Row>
      </Row>
      <Row className="pt-4 justify">
        <p>
          Enneagram 9 wing 1, who is passionate about clean code doing thing the{' '}
          "right" way
        </p>
        <p>
          I am a recovering electrical engineer now software engineer. I am
          passionate about making processes, code, life better. I currently work
          at Beyond Pricing making the world better though dynamic pricing and
          cool websites.
        </p>
        <p>
          I love exploring software and technology from unit test frameworks to
          3D printers.
        </p>
      </Row>
    </Container>
  )
}
