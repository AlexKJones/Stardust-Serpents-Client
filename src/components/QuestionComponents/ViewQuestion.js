import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { viewQuestion, deleteQuestion } from '../../api/auth'
import Card from 'react-bootstrap/Card'

const ViewQuestion = (props) => {
  const [question, setQuestion] = useState(null)
  const [questions, setQuestions] = useState(null)
  const [owner, setOwner] = useState(null)
  const { user, msgAlert, match, history } = props

  useEffect(() => {
    viewQuestion(user, match.params.questionId)
      .then(res => {
        setQuestion(res.data.question)
        setQuestions(res.data.questions)
        setOwner(res.data.question.owner)
      })
      .then(() => {
        msgAlert({
          heading: 'Check this out',
          message: 'See the Question there!',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'view Question Failed :(',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      })
  }, [])

  const handleDelete = () => {
    deleteQuestion(user, match.params.questionId)
      .then(() => {
        msgAlert({
          heading: 'Question Deleted',
          message: 'Back to the list of questions that exist',
          variant: 'success'
        })
      })
      .then(() => history.push('/questions'))
      .catch(err => {
        msgAlert({
          heading: 'Deletion Failed',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      })
  }

  const handleQDelete = () => {
    deleteQuestion(user, match.params.questionId)
      .then(() => {
        msgAlert({
          heading: 'Question Deleted',
          message: 'Back to the list of questions that exist',
          variant: 'success'
        })
      })
      .then(() => history.push('/questions'))
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
      {question && questions ? (
        <div>
          <div>
            <Card>
              <Card.Title>{question.genes}</Card.Title>
              <Card.Text>Price: ${question.price}.00</Card.Text>
              <Card.Text>Age: {question.age}</Card.Text>
              <Card.Text>{question.description}</Card.Text>
              {user._id === owner ? <Link to={'/question-update/' + question._id}>Update Question</Link> : '' }
              <Link to={'/create-question/' + question._id}>Ask A Question</Link>
              {user._id === owner ? <Button onClick={handleDelete}>Delete This Question</Button> : '' }
            </Card>
            {questions.map(question => (
              <div key={question._id}>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>{question.title}</Card.Title>
                    <Card.Text>{question.body}</Card.Text>
                    {user._id === question.owner ? <Link to={`/question-update/${question._id}`}>Edit Question</Link> : '' }
                    {user._id === question.owner ? <button onClick={handleQDelete}>Delete Question</button> : '' }
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

export default withRouter(ViewQuestion)
