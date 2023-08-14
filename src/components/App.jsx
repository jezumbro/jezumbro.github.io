import { StaticImage } from 'gatsby-plugin-image'
import posthog from 'posthog-js'
import React from 'react'
import { Container, Image, Row } from 'react-bootstrap'

export const App = () => {
  return (
    <Container className="text-center">
      <Row>
        <h1>Zeke Zumbro</h1>
        <Row className="d-inline">
          <Container style={{ width: '300px' }}>
            <StaticImage src={'../images/about.jpg'} alt={'logo'} />
          </Container>
        </Row>
        <Row className="justify-content-center align-content-center text-white-50 font-monospace d-inline pt-2">
          Disc-Golfer. Dog-lover. Christ-follower.
        </Row>
      </Row>
      <Row className="pt-4 justify">
        <p>Enneagram 9 wing 1, who is loves doing thing the "right" way</p>
        <p>
          I am passionate about making processes, code, and life better. I
          currently work at Walmart. I love exploring software and technology
          from unit test frameworks to 3D printers and home.
        </p>
      </Row>
    </Container>
  )
}
