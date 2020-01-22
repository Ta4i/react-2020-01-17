import React from 'react'
import Menu from './menu'
import Reviews from './reviews'

function Restaurant(props) {
  return (
    <>
      <Menu restaurant={props.restaurant} />
      <Reviews reviews={props.restaurant.reviews} />
    </>
  )
}

export default Restaurant
