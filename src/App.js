import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'

// <-------- Product imports ------------->
import CreateProduct from './components/ProductComponents/CreateProducts'
import UpdateProduct from './components/ProductComponents/UpdateProduct'
import ViewProduct from './components/ProductComponents/ViewProduct'
import ViewProducts from './components/ProductComponents/ViewProducts'

// <-------- Question imports ------------->
import CreateQuestion from './components/QuestionComponents/CreateQuestion'
import UpdateQuestion from './components/QuestionComponents/UpdateQuestion'

// <-------- Info imports ------------->
import About from './components/AboutComponents/About'
import AnimalCare from './components/AboutComponents/AnimalCare'

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} /><Route path='/about' render={() => (
            <About msgAlert={this.msgAlert} setUser={this.setUser} />
          )} /><Route path='/animal-care' render={() => (
            <AnimalCare msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/question-update/:questionId' render={({ match, history }) => (
            <UpdateQuestion
              match={match}
              history={history}
              user={user}
              msgAlert={this.msgAlert}
            />
          )}/>
          <Route user={user} exact path='/products' render={() => (
            <ViewProducts
              user={user}
              msgAlert={this.msgAlert}
            />
          )}/>
          <AuthenticatedRoute user={user} path='/create-products' render={() => (
            <CreateProduct
              user={user}
              msgAlert={this.msgAlert}
            />
          )}/>
          <Route user={user} exact path='/products/:productId' render={() => (
            <ViewProduct
              user={user}
              msgAlert={this.msgAlert}
            />
          )}/>
          <AuthenticatedRoute user={user} path='/product-update/:productId' render={({ match, history }) => (
            <UpdateProduct
              match={match}
              history={history}
              user={user}
              msgAlert={this.msgAlert}
            />
          )}/>
          <AuthenticatedRoute user={user} path='/create-question/:productId' render={({ match }) => (
            <CreateQuestion
              match={match}
              user={user}
              msgAlert={this.msgAlert}
            />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
