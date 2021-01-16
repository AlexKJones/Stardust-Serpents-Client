import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'

function MoreInfoModal5 (props) {
  // const [product] = useState(null)
  console.log('props are ', props)
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.modalProduct.product.genes}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={props.modalProduct.product.img1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={props.modalProduct.product.img2}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={props.modalProduct.product.img3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default MoreInfoModal5
