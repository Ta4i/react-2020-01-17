import React from 'react'
import Menu from './menu'
import Reviews from './reviews'

const Restaurant = props => {
  return (
    <div>
      <Menu restaurant={props.restaurant} />
      <Reviews reviews={props.restaurant.reviews} />
    </div>
  )
}

export default Restaurant
