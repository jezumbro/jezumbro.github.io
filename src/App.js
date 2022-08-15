import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import classNames from 'classnames'
import { Container, Image, Row } from 'react-bootstrap'

export const App = () => {
  const sophieImage = '/images/sophie_small.jpeg'
  return (
    <Container style={{ textAlign: 'center' }}>
      <Row>
        <h1>Zeke Zumbro</h1>
        <Row className="d-inline">
          <Container style={{ width: '300px' }}>
            <Image src={sophieImage} alt="logo" fluid />
          </Container>
        </Row>
        <Row className="justify-content-center align-content-center text-white-50 font-monospace d-inline pt-2">
          Disc-Golfer. Engineer. Dog-lover. Christ-follower.
        </Row>
      </Row>
      <Row className={classNames('pt-4', 'justify')}>
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
        <p>I love exploring technology from 3D printers, to home assistants.</p>
      </Row>
    </Container>
  )
}
