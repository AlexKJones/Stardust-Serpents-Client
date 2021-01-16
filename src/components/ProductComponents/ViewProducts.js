import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { viewProducts } from '../../api/auth'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

import StripeCheckoutButton from '../stripe-button/stripe.button'
import CardGroup from 'react-bootstrap/CardGroup'
import MoreInfoModal from '../Modals/MoreInfoModal'
import MoreInfoModal0 from '../Modals/MoreInfoModal0'
import MoreInfoModal1 from '../Modals/MoreInfoModal1'
import MoreInfoModal2 from '../Modals/MoreInfoModal2'
import MoreInfoModal3 from '../Modals/MoreInfoModal3'
import MoreInfoModal4 from '../Modals/MoreInfoModal4'
import MoreInfoModal5 from '../Modals/MoreInfoModal5'

const ViewProducts = props => {
  const [productArray, setProductArray] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalOpen0, setModalOpen0] = useState(false)
  const [modalOpen1, setModalOpen1] = useState(false)
  const [modalOpen2, setModalOpen2] = useState(false)
  const [modalOpen3, setModalOpen3] = useState(false)
  const [modalOpen4, setModalOpen4] = useState(false)
  const [modalOpen5, setModalOpen5] = useState(false)
  const [modalProduct, setModalProduct] = useState({ genes: 'foo', img1: 'foo', img2: 'foo', img3: 'foo' })

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
      height: '24rem',
      margin: 10
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
      height: '24rem',
      margin: 10
    },
    cardImage: {
      objectFit: 'cover',
      borderRadius: 45
    }
  }

  const handleShow = () => setModalOpen(true)
  const handleClose = () => setModalOpen(false)
  const handleShow0 = () => setModalOpen0(true)
  const handleClose0 = () => setModalOpen0(false)
  const handleShow1 = () => setModalOpen1(true)
  const handleClose1 = () => setModalOpen1(false)
  const handleShow2 = () => setModalOpen2(true)
  const handleClose2 = () => setModalOpen2(false)
  const handleShow3 = () => setModalOpen3(true)
  const handleClose3 = () => setModalOpen3(false)
  const handleShow4 = () => setModalOpen4(true)
  const handleClose4 = () => setModalOpen4(false)
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
        <MoreInfoModal
          show={modalOpen}
          handleClose={handleClose}
        />
        <MoreInfoModal0
          show={modalOpen0}
          handleClose={handleClose0}
        />
        <MoreInfoModal1
          show={modalOpen1}
          handleClose={handleClose1}
        />
        <MoreInfoModal2
          show={modalOpen2}
          handleClose={handleClose2}
        />
        <MoreInfoModal3
          show={modalOpen3}
          handleClose={handleClose3}
        />
        <MoreInfoModal4
          show={modalOpen4}
          handleClose={handleClose4}
        />
        <MoreInfoModal5
          show={modalOpen5}
          modalProduct={modalProduct}
          handleClose={handleClose5}
        />
        <CardGroup>
          <div key='Caramel Albino'>
            <Card style={stylesOdd.card} className="text-center">
              <Card.Img variant="top" src="https://i.imgur.com/mDff7mC.jpg?4" fluid />
              <Card.Title>Caramel Albino</Card.Title>
              <Card.Text>Price: $500.00</Card.Text>
              <Card.Text>Age: Born May 2020</Card.Text>
              <Button variant="dark" onClick={handleShow}>
                More Pictures
              </Button>
              <StripeCheckoutButton price={500.00} />
            </Card>
          </div>

          <div key='Silver'>
            <Card style={stylesEven.card} className="text-center">
              <Card.Img variant="top" src="https://i.imgur.com/hZwUJ6E.jpg" fluid />
              <Card.Title>Silver</Card.Title>
              <Card.Text>Price: $6,500.00</Card.Text>
              <Card.Text>Age: Born May 2020</Card.Text>
              <Button variant="dark" onClick={handleShow0}>
                More Pictures
              </Button>
              <StripeCheckoutButton price={6500.00} />
            </Card>
          </div>

          <div key='Narrow Nose'>
            <Card style={stylesOdd.card} className="text-center">
              <Card.Img variant="top" src="https://i.imgur.com/7flpfZX.jpg" fluid />
              <Card.Title>Narrow Nose</Card.Title>
              <Card.Text>Price: $500.00</Card.Text>
              <Card.Text>Age: Born May 2020</Card.Text>
              <Button variant="dark" onClick={handleShow1}>
                More Pictures
              </Button>
              <StripeCheckoutButton price={500.00} />
            </Card>
          </div>
          <div key='Spied'>
            <Card style={stylesEven.card} className="text-center">
              <Card.Img variant="top" src="https://i.imgur.com/J7zmHpq.jpg" fluid />
              <Card.Title>Spied</Card.Title>
              <Card.Text>Price: $500.00</Card.Text>
              <Card.Text>Age: Born May 2020</Card.Text>
              <Button variant="dark" onClick={handleShow2}>
                More Pictures
              </Button>
              <StripeCheckoutButton price={500.00} />
            </Card>
          </div>

          <div key='Albino Hognose'>
            <Card style={stylesOdd.card} className="text-center">
              <Card.Img variant="top" src="https://i.imgur.com/SCINxff.jpg" fluid />
              <Card.Title>Albino Hognose</Card.Title>
              <Card.Text>Price: $500.00</Card.Text>
              <Card.Text>Age: Born May 2020</Card.Text>
              <Button variant="dark" onClick={handleShow3}>
                More Pictures
              </Button>
              <StripeCheckoutButton price={500.00} />
            </Card>
          </div>

          <div key='Snek'>
            <Card style={stylesEven.card} className="text-center">
              <Card.Img variant="top" src="https://i.imgur.com/KLa1VCf.jpg?1" fluid />
              <Card.Title>Snek</Card.Title>
              <Card.Text>Price: $500.00</Card.Text>
              <Card.Text>Age: Born May 2020</Card.Text>
              <Button variant="dark" onClick={handleShow4}>
                More Pictures
              </Button>
              <StripeCheckoutButton price={500.00} />
            </Card>
          </div>
        </CardGroup>
        <CardGroup>
          {productArray.map(product => (
            <div key={product._id}>
              <Card style={stylesEven.card}>
                <Card.Img variant="top" src={product.image} fluid />
                <Card.Title>{product.genes}</Card.Title>
                <Card.Text>Price: ${product.price}.00</Card.Text>
                <Card.Text>Age: {product.age}</Card.Text>
                <Button variant="dark" onClick={() => handleShow5(product)}>
                  More Pictures
                </Button>
                <StripeCheckoutButton price={product.price} />
                {user ? <Link to={`/products/${product._id}`}>More Info</Link> : '' }
              </Card>
            </div>
          ))}
        </CardGroup>
      </div>

    )
  }
}

export default ViewProducts
