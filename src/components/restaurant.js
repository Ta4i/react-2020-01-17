import React from 'react'
import Menu from './menu'
import Reviews from './reviews'
import Rate from './averageRate'
const Restaurant = props => {
  return (
    <div>
      <Rate reviews={props.restaurant.reviews} />
      <Menu menu={props.restaurant.menu} />
      <Reviews reviews={props.restaurant.reviews} />
    </div>
  )
}

export default Restaurant
