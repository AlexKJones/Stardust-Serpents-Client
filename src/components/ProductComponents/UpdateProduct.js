import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { updateProduct, viewProduct } from '../../api/auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ProductUpdate = (props) => {
  const [product, setProduct] = useState({ title: '', starring: '', director: '', description: '', released: '' })
  const [updated, setUpdated] = useState(false)
  const { msgAlert } = props

  useEffect(() => {
    viewProduct(props.user, props.match.params.productId)
      .then(res => setProduct(res.data.product))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setProduct(prevProduct => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedProduct = Object.assign({}, prevProduct, updatedField)
      return editedProduct
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    updateProduct(props.user, product, props.match.params.productId)
      .then(() => setUpdated(true))
      .then(() => {
        msgAlert({
          heading: 'Update Product Success',
          message: 'Nice job!',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Update Product Failed :(',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      })
      .catch(console.error)
  }

  if (updated) {
    return <Redirect to={`/products/${props.match.params.productId}`} />
  }
  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Create Product</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="genes">
            <Form.Label>Genes</Form.Label>
            <Form.Control
              placeholder="Female Super Banana Panda"
              value={product.genes}
              name="genes"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              placeholder="2,000.00"
              value={product.price}
              name="price"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              placeholder="born in may 2020"
              value={product.director}
              name="age"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder="any notes"
              value={product.description}
              name="description"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>Main Image</Form.Label>
            <Form.Control
              placeholder="any notes"
              value={product.image}
              name="image"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="img1">
            <Form.Label>Img1</Form.Label>
            <Form.Control
              placeholder="Scroll image 1"
              value={product.img1}
              name="img1"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="img2">
            <Form.Label>Img2</Form.Label>
            <Form.Control
              placeholder="2nd image"
              value={product.img2}
              name="img2"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="img3">
            <Form.Label>Img3</Form.Label>
            <Form.Control
              placeholder="3rd image"
              value={product.img3}
              name="img3"
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
          <Link to={'/products'}>
            <Button>Cancel</Button>
          </Link>
        </Form>
      </div>
    </div>
  )
}

export default ProductUpdate
