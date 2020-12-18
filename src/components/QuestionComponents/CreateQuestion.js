import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const QuestionCreate = props => {
  const productId = props.match.params.productId
  const [question, setQuestion] = useState({ title: '', body: '', product: productId })
  const [createdQuestionId, setCreatedQuestionId] = useState(null)
  const { msgAlert } = props
  const handleChange = event => {
    event.persist()
    setQuestion(prevQuestion => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedQuestion = Object.assign({}, prevQuestion, updatedField)
      return editedQuestion
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/questions`,
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + props.user.token
      },
      data: { question }
    })
      .then(res => setCreatedQuestionId(res.data.question._id))
      .then(() => {
        msgAlert({
          heading: 'Ask Question Success',
          message: 'Nice Job!',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Ask Question Failed :(',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      }).catch(console.error)
  }

  if (createdQuestionId) {
    return <Redirect to={`/questions/${createdQuestionId}`} />
  }

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Create Question</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder="How is the temperment?"
              value={question.title}
              name="title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="body">
            <Form.Label>Body</Form.Label>
            <Form.Control
              placeholder="Would we be good as a pet?"
              value={question.body}
              name="body"
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
          <Link to={'/products'}>
            <button>Cancel</button>
          </Link>
        </Form>
      </div>
    </div>
  )
}

export default QuestionCreate
