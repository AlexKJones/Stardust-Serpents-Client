import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const ProductCreate = props => {
  const [product, setProduct] = useState({ genes: '', price: '', age: '', description: '', image: '', img1: '', img2: '', img3: '' })
  const [createdProductId, setCreatedProductId] = useState(null)
  const { msgAlert } = props
  const handleChange = event => {
    event.persist()
    setProduct(prevProduct => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedProduct = Object.assign({}, prevProduct, updatedField)
      return editedProduct
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/products`,
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + props.user.token
      },
      data: { product }
    })
      .then(res => setCreatedProductId(res.data.product._id))
      .then(() => {
        msgAlert({
          heading: 'Create Product Success',
          message: 'See the Product there!',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Create Product Failed :(',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      })
      .catch(console.error)
  }

  if (createdProductId) {
    return <Redirect to={`/products/${createdProductId}`} />
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
            <Form.Label>Image</Form.Label>
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">
              Make sure you put the direct link to the image so it stores correctly - try right clicking on an image in a web browser and selecting Copy Image Address.
              </Tooltip>}>
              <span className="d-inline-block">
                <Button
                  disabled style={{ pointerEvents: 'none' }}>
                    ?
                </Button>
              </span>
            </OverlayTrigger>
            <Form.Control
              placeholder="Input the direct image URL here"
              value={product.image}
              name="image"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="img1">
            <Form.Label>img1</Form.Label>
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">
              Make sure you put the direct link to the image so it stores correctly - try right clicking on an image in a web browser and selecting Copy Image Address.
              </Tooltip>}>
              <span className="d-inline-block">
                <Button
                  disabled style={{ pointerEvents: 'none' }}>
                    ?
                </Button>
              </span>
            </OverlayTrigger>
            <Form.Control
              placeholder="Input the direct image URL here"
              value={product.img1}
              name="img1"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="img2">
            <Form.Label>img2</Form.Label>
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">
              Make sure you put the direct link to the image so it stores correctly - try right clicking on an image in a web browser and selecting Copy Image Address.
              </Tooltip>}>
              <span className="d-inline-block">
                <Button
                  disabled style={{ pointerEvents: 'none' }}>
                    ?
                </Button>
              </span>
            </OverlayTrigger>
            <Form.Control
              placeholder="Input the direct image URL here"
              value={product.img2}
              name="img2"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="img3">
            <Form.Label>img3</Form.Label>
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">
              Make sure you put the direct link to the image so it stores correctly - try right clicking on an image in a web browser and selecting Copy Image Address.
              </Tooltip>}>
              <span className="d-inline-block">
                <Button
                  disabled style={{ pointerEvents: 'none' }}>
                    ?
                </Button>
              </span>
            </OverlayTrigger>
            <Form.Control
              placeholder="Input the direct image URL here"
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

export default ProductCreate
