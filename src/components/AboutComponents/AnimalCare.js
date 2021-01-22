import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import CardGroup from 'react-bootstrap/CardGroup'

const AnimalCare = props => {
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
      height: '100%',
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
              <Card.Title>Animal Care</Card.Title>
              <Card.Text>This area is under construction! Here is a few basic resources for now.</Card.Text>
              <div>
                <iframe src='https://www.youtube.com/embed/rNpljc5aH1k'
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  title='video'
                />
              </div>
              <Link to={'/products/'}>Back to Snakes</Link>
            </Card>
          </div>
        </CardGroup>
      </Container>
    </div>

  )
}

export default AnimalCare
