import React from 'react'
import Menu from './menu'
import Reviews from './reviews'
const Restaurant = props => {
  return (
    <div>
      <Menu menu={props.restaurant.menu} />
      <Reviews reviews={props.restaurant.reviews} />
    </div>
  )
}
export default Restaurant
