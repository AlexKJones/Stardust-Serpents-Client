import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import CardGroup from 'react-bootstrap/CardGroup'

const About = props => {
  useEffect(() => {
    console.log('content')
  }, [])

  const stylesEven = {
    card: {
      backgroundColor: '#553885',
      color: '#9B77CE',
      borderRadius: 20,
      padding: '1rem',
      width: '100%',
      height: '80%',
      margin: 10
    },
    cardImage: {
      objectFit: 'cover',
      width: '100%',
      height: '60%'
    },
    conatiner: {
      display: 'flex'
    }
  }

  return (
    <div>
      <Container fluid>
        <CardGroup className="d-flex justify-content-center">
          <div>
            <Card style={stylesEven.card}>
              <Card.Img variant="top" src='https://i.imgur.com/MXFEkoG.jpg?1' style={stylesEven.cardImage } />
              <Card.Title>Stardust Serpents</Card.Title>
              <Card.Text>We are a couple of reptile breeders just outside of the Dallas area.</Card.Text>
              <Link to={'/products/'}>Back to Snakes</Link>
            </Card>
          </div>
        </CardGroup>
      </Container>
    </div>

  )
}

export default About
