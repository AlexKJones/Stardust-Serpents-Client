import apiUrl from '../apiConfig'
import axios from 'axios'

export const signUp = credentials => {
  return axios({
    method: 'POST',
    url: apiUrl + '/sign-up',
    data: {
      credentials: {
        email: credentials.email,
        username: credentials.username,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation
      }
    }
  })
}

export const signIn = credentials => {
  return axios({
    url: apiUrl + '/sign-in',
    method: 'POST',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password
      }
    }
  })
}

export const signOut = user => {
  return axios({
    url: apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const changePassword = (passwords, user) => {
  return axios({
    url: apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      passwords: {
        old: passwords.oldPassword,
        new: passwords.newPassword
      }
    }
  })
}

// <---- Question Crud Zone ----->
// <--------------------------->
// <--------------------------->

export const createQuestion = (question, user) => {
  return axios({
    url: apiUrl + '/create-questions',
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + user.token
    },
    data: {
      question: {
        title: question.title,
        body: question.body
      }
    }
  })
}

export const updateQuestion = (user, question, id) => {
  return axios({
    url: apiUrl + '/questions/' + id,
    headers: {
      Authorization: 'Bearer ' + user.token
    },
    method: 'PATCH',
    data: {
      question: {
        title: question.title,
        body: question.body
      }
    }
  })
}

export const deleteQuestion = (user, id) => {
  return axios({
    url: apiUrl + '/questions/' + id,
    headers: {
      Authorization: 'Bearer ' + user.token
    },
    method: 'DELETE'
  })
}

export const viewQuestion = (user, id) => {
  return axios({
    url: apiUrl + '/questions/' + id,
    headers: {
      Authorization: 'Bearer ' + user.token
    },
    method: 'GET'
  })
}

// // <---- Product Crud Zone ----->
// // <--------------------------->
// // <--------------------------->

export const createProduct = (product, user) => {
  return axios({
    url: apiUrl + '/create-products',
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + user.token
    },
    data: {
      product: {
        genes: product.genes,
        price: product.price,
        age: product.age,
        description: product.description
      }
    }
  })
}

export const viewProduct = (user, id) => {
  return axios({
    url: apiUrl + '/products/' + id,
    method: 'GET'
  })
}

export const viewProducts = (user, id) => {
  return axios({
    url: apiUrl + '/products/',
    method: 'GET'
  }
  )
}

export const updateProduct = (user, product, id) => {
  return axios({
    url: apiUrl + '/products/' + id,
    headers: {
      Authorization: 'Bearer ' + user.token
    },
    method: 'PATCH',
    data: {
      product: {
        genes: product.genes,
        price: product.price,
        age: product.age,
        description: product.description
      }
    }
  })
}

export const deleteProduct = (user, id) => {
  return axios({
    url: apiUrl + '/products/' + id,
    headers: {
      Authorization: 'Bearer ' + user.token
    },
    method: 'DELETE'
  })
}
