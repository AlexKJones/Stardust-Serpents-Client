import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { updateProduct, viewProduct } from '../../api/auth'

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
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        placeholder="A Wonderful Movie"
        value={product.title}
        name="title"
        onChange={handleChange}
      />
      <label>Starring</label>
      <input
        placeholder="John Doe"
        value={product.starring}
        name="starring"
        onChange={handleChange}
      />
      <label>Director</label>
      <input
        placeholder="John Doe"
        value={product.director}
        name="director"
        onChange={handleChange}
      />
      <label>Description</label>
      <input
        placeholder="John Doe"
        value={product.description}
        name="description"
        onChange={handleChange}
      />
      <label>Released</label>
      <input
        placeholder="John Doe"
        value={product.released}
        name="released"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      <Link to={'update-product/'}>
        <button>Cancel</button>
      </Link>
    </form>
  )
}

export default ProductUpdate
