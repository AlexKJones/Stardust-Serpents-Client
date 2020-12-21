import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { viewProducts } from '../../api/auth'
import Card from 'react-bootstrap/Card'

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

  if (!productArray) {
    return ('loading...')
  } else {
    return (
      <div>
        {productArray.map(product => (
          <div key={product._id}>
            <Card>
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
