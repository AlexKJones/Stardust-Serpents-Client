import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { viewProducts } from '../../api/auth'
import Card from 'react-bootstrap/Card'
import StripeCheckoutButton from '../stripe-button/stripe.button'
import CardGroup from 'react-bootstrap/CardGroup'
// import Button from 'react-bootstrap/Button'
// import SlideOne from '../Slideshows/SlideOne'

const ViewProducts = props => {
  const [productArray, setProductArray] = useState(null)
  const { user } = props

  useEffect(() => {
    viewProducts()
      .then(res => {
        setProductArray(res.data.products)
      })
      .catch(console.error)
  }, [])

  const stylesOdd = {
    card: {
      backgroundColor: '#303D5B',
      color: '#9B77CE',
      borderRadius: 20,
      padding: '1rem',
      width: '18rem',
      height: '24rem'
    },
    cardImage: {
      objectFit: 'cover',
      borderRadius: 45
    }
  }
  const stylesEven = {
    card: {
      backgroundColor: '#553885',
      color: '#9B77CE',
      borderRadius: 20,
      padding: '1rem',
      width: '18rem',
      height: '24rem'
    },
    cardImage: {
      objectFit: 'cover',
      borderRadius: 45
    }
  }

  if (!productArray) {
    return ('loading...')
  } else {
    return (
      <div>
        <CardGroup>
          <div key='Caramel Albino'>
            <Card style={stylesOdd.card} className="text-center">
              <Card.Img variant="top" src="https://i.imgur.com/mDff7mC.jpg?3" fluid />
              <Card.Title>Caramel Albino</Card.Title>
              <Card.Text>Price: $500.00</Card.Text>
              <Card.Text>Age: Born May 2020</Card.Text>
              <StripeCheckoutButton price={500.00} />
            </Card>
          </div>

          <div key='Silver'>
            <Card style={stylesEven.card} className="text-center">
              <Card.Img variant="top" src="https://i.imgur.com/hZwUJ6E.jpg" fluid />
              <Card.Title>Silver</Card.Title>
              <Card.Text>Price: $500.00</Card.Text>
              <Card.Text>Age: Born May 2020</Card.Text>
              <StripeCheckoutButton price={500.00} />
            </Card>
          </div>

          <div key='Narrow Nose'>
            <Card style={stylesOdd.card} className="text-center">
              <Card.Img variant="top" src="https://i.imgur.com/7flpfZX.jpg" fluid />
              <Card.Title>Narrow Nose</Card.Title>
              <Card.Text>Price: $500.00</Card.Text>
              <Card.Text>Age: Born May 2020</Card.Text>
              <StripeCheckoutButton price={500.00} />
            </Card>
          </div>
        </CardGroup>
        <CardGroup>
          <div key='Spied'>
            <Card style={stylesEven.card} className="text-center">
              <Card.Img variant="top" src="https://i.imgur.com/J7zmHpq.jpg" fluid />
              <Card.Title>Spied</Card.Title>
              <Card.Text>Price: $500.00</Card.Text>
              <Card.Text>Age: Born May 2020</Card.Text>
              <StripeCheckoutButton price={500.00} />
            </Card>
          </div>

          <div key='Albino Hognose'>
            <Card style={stylesOdd.card} className="text-center">
              <Card.Img variant="top" src="https://i.imgur.com/SCINxff.jpg" fluid />
              <Card.Title>Albino Hognose</Card.Title>
              <Card.Text>Price: $500.00</Card.Text>
              <Card.Text>Age: Born May 2020</Card.Text>
              <StripeCheckoutButton price={500.00} />
            </Card>
          </div>

          <div key='Snek'>
            <Card style={stylesEven.card} className="text-center">
              <Card.Img variant="top" src="https://i.imgur.com/KLa1VCf.jpg?1" fluid />
              <Card.Title>Snek</Card.Title>
              <Card.Text>Price: $500.00</Card.Text>
              <Card.Text>Age: Born May 2020</Card.Text>
              <StripeCheckoutButton price={500.00} />
            </Card>
          </div>
        </CardGroup>
        {productArray.map(product => (
          <div key={product._id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" fluid />
              <Card.Title>{product.genes}</Card.Title>
              <Card.Text>Price: ${product.price}.00</Card.Text>
              <Card.Text>Age: {product.age}</Card.Text>
              {user ? <Link to={`/products/${product._id}`}>More Info</Link> : '' }
            </Card>
          </div>
        ))}
      </div>

    )
  }
}

export default ViewProducts
