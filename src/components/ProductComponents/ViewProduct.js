import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { viewProduct, deleteProduct } from '../../api/auth'
import Card from 'react-bootstrap/Card'

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

  return (
    <div>
      {product && questions ? (
        <div>
          <div>
            <Card>
              <Card.Title>{product.genes}</Card.Title>
              <Card.Text>Price: ${product.price}.00</Card.Text>
              <Card.Text>Age: {product.age}</Card.Text>
              <Card.Text>{product.description}</Card.Text>
              {user._id === owner ? <Link to={'/product-update/' + product._id}>Update Product</Link> : '' }
              <Link to={'/create-question/' + product._id}>Ask A Question</Link>
              {user._id === owner ? <Button onClick={handleDelete}>Delete This Product</Button> : '' }
            </Card>
            {questions.map(question => (
              <div key={question._id}>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>{question.title}</Card.Title>
                    <Card.Text>{question.body}</Card.Text>
                    {user._id === question.owner ? <Link to={`/question-update/${question._id}`}>Edit Question</Link> : '' }
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      ) : 'Loading...'}
    </div>
  )
}

export default withRouter(ViewProduct)
