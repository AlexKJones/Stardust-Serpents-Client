// stripe.button.component.jsx
import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb'

  const onToken = token => {
    console.log(token)
    alert('Payment Succesful!')
  }

  return (
    <StripeCheckout
      label='Buy Now'
      name='Stardust Serpents'
      billingAddress
      shippingAddress
      image='https://i.imgur.com/SvfJHUo.png'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Buy Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
