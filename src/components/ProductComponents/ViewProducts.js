import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { viewProducts } from '../../api/auth'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'

import CardGroup from 'react-bootstrap/CardGroup'
import MoreInfoModal5 from '../Modals/MoreInfoModal5'

const product = { genes: 'foo', img1: '', img2: '', img3: '' }
const ViewProducts = props => {
  const [productArray, setProductArray] = useState(null)
  const [modalOpen5, setModalOpen5] = useState(false)
  const [modalProduct, setModalProduct] = useState({ product })

  // const { user } = props

  useEffect(() => {
    viewProducts()
      .then(res => {
        setProductArray(res.data.products)
      })
      .catch(console.error)
  }, [])

  const stylesEven = {
    card: {
      backgroundColor: '#553885',
      color: '#9B77CE',
      borderRadius: 20,
      padding: '1rem',
      width: '18rem',
      height: '24rem',
      margin: 10
    },
    cardImage: {
      objectFit: 'cover',
      width: '100%',
      height: '40%'
    },
    conatiner: {
      display: 'flex'
    }
  }

  const handleShow5 = (product) => {
    setModalOpen5(true)
    setModalProduct({ product: product })
  }
  const handleClose5 = () => setModalOpen5(false)

  if (!productArray) {
    return <Spinner animation="border" variant="secondary" />
  } else {
    return (
      <div>
        <MoreInfoModal5
          show={modalOpen5}
          modalProduct={modalProduct}
          product={product}
          handleClose={handleClose5}
        />
        <Container fluid>
          <CardGroup className="d-flex justify-content-center">
            {productArray.map(product => (
              <div key={product._id}>
                <Card style={stylesEven.card}>
                  <Card.Img variant="top" src={product.image} style={stylesEven.cardImage } />
                  <Card.Title>{product.genes}</Card.Title>
                  <Card.Text>Price: ${product.price}.00</Card.Text>
                  <Card.Text>Age: {product.age}</Card.Text>
                  <Button variant="dark" onClick={() => handleShow5(product)}>
                    More Pictures
                  </Button>
                  <Link to={`/products/${product._id}`}>More Info</Link>
                </Card>
              </div>
            ))}
          </CardGroup>
        </Container>
      </div>

    )
  }
}

export default ViewProducts
