import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { updateQuestion } from '../../api/auth'

const QuestionUpdate = (props) => {
  const [question, setQuestion] = useState({ title: '', body: '', rating: '' })
  const [updated, setUpdated] = useState(false)
  const { msgAlert } = props

  // useEffect(() => {
  //   viewQuestion(props.user, props.match.params.questionId)
  //     .then(res => setQuestion(res.data.question))
  //     .catch(console.error)
  // }, [])

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
    return <Redirect to={`/questions/${props.match.params.questionId}`} />
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        placeholder="A Wonderful Movie"
        value={question.title}
        name="title"
        onChange={handleChange}
      />
      <label>body</label>
      <input
        placeholder="Wow so good"
        value={question.description}
        name="body"
        onChange={handleChange}
      />
      <label>Rating</label>
      <input
        placeholder="10"
        value={question.released}
        name="rating"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      <Link to={'update-question/'}>
        <button>Cancel</button>
      </Link>
    </form>
  )
}

export default QuestionUpdate
