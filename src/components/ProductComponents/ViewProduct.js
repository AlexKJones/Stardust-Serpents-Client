import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { viewProduct, deleteProduct } from '../../api/auth'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import StripeCheckoutButton from '../stripe-button/stripe.button'

const ViewProduct = (props) => {
  const [product, setProduct] = useState(null)
  const [questions, setQuestions] = useState(null)
  const [owner, setOwner] = useState(null)
  const { user, msgAlert, match, history } = props

  useEffect(() => {
    viewProduct(user, match.params.productId)
      .then(res => {
        setProduct(res.data.product)
        setQuestions(res.data.questions)
        setOwner(res.data.product.owner)
      })
      .then(() => {
        msgAlert({
          heading: 'Check this out',
          message: 'See the Product there!',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'view Product Failed :(',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      })
  }, [])

  const handleDelete = () => {
    deleteProduct(user, match.params.productId)
      .then(() => {
        msgAlert({
          heading: 'Product Deleted',
          message: 'Back to the list of products that exist',
          variant: 'success'
        })
      })
      .then(() => history.push('/products'))
      .catch(err => {
        msgAlert({
          heading: 'Deletion Failed',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      })
  }

  // {user ? <Link to={`/products/${product._id}`}>More Info</Link> : 'Sign in to ask a question' }
  const stylesOdd = {
    card: {
      backgroundColor: '#303D5B',
      color: '#9B77CE',
      borderRadius: 20,
      padding: '1rem',
      width: '18rem',
      height: '18rem'
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
      width: '54rem',
      height: '36rem'
    },
    cardImage: {
      objectFit: 'cover',
      width: '100%',
      height: '60%'
    }
  }

  console.log(questions)

  return (
    <div>
      {product && questions ? (
        <div>
          <div>
            <Card style={stylesEven.card}>
              <Card.Img variant="top" src={product.image} style={stylesEven.cardImage } />
              <Card.Title>{product.genes}</Card.Title>
              <Card.Text>Price: ${product.price}.00 plus $60 for shipping and tax</Card.Text>
              <Card.Text>Age: {product.age}</Card.Text>
              <Card.Text>{product.description}</Card.Text>
              <StripeCheckoutButton price={product.price + 60 + ((product.price * 8.25) / 100)} />
              {user ? user._id === owner ? <Link to={'/product-update/' + product._id}>Update Product</Link> : '' : '' }
              {user ? <Link to={'/create-question/' + product._id}>Ask A Question</Link> : 'Sign in to ask a question' }
              {user ? user._id === owner ? <Button onClick={handleDelete}>Delete This Product</Button> : '' : '' }
            </Card>
            <CardGroup>
              {questions.map(question => (
                <div key={question._id}>
                  <Card style={stylesOdd.card}>
                    <Card.Body>
                      <Card.Title>{question.title}</Card.Title>
                      <Card.Text>{question.body}</Card.Text>
                      {user ? user._id === question.owner ? <Link to={`/question-update/${question._id}`}>Edit Question</Link> : '' : '' }
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </CardGroup>
          </div>
        </div>
      ) : 'Loading...'}
    </div>
  )
}

export default withRouter(ViewProduct)
