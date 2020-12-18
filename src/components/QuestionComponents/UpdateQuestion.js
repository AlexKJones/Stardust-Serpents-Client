import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { updateQuestion, viewQuestion, deleteQuestion } from '../../api/auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const QuestionUpdate = (props) => {
  const productId = props.match.params.productId
  const [question, setQuestion] = useState({ title: '', body: '', product: productId })
  const [updated, setUpdated] = useState(false)
  const { msgAlert, user, match } = props

  useEffect(() => {
    viewQuestion(props.user, props.match.params.questionId)
      .then(res => setQuestion(res.data.question))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setQuestion(prevQuestion => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedQuestion = Object.assign({}, prevQuestion, updatedField)
      return editedQuestion
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    updateQuestion(props.user, question, props.match.params.questionId)
      .then(() => setUpdated(true))
      .then(() => {
        msgAlert({
          heading: 'Update Question Success',
          message: 'Nice Job!',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Update Question Failed :(',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      })
      .catch(console.error)
  }

  if (updated) {
    return <Redirect to={'/products/'} />
  }

  const handleQDelete = (props) => {
    deleteQuestion(user, match.params.questionId)
      .then(() => {
        msgAlert({
          heading: 'Question Deleted',
          message: 'Back to products',
          variant: 'success'
        })
      })
      .then(() => history.push('/questions'))
      .then(<Redirect to={'/products/'} />)
      .catch(err => {
        msgAlert({
          heading: 'Deletion Failed',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      })
  }

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Update Question</h3>
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
          {user._id === question.owner ? <button onClick={handleQDelete}>Delete Question</button> : '' }
        </Form>
      </div>
    </div>
  )
}

export default QuestionUpdate
