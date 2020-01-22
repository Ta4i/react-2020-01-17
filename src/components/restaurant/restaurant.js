import React from 'react'
import Menu from '../menu/menu'
import Reviews from '../reviews/reviews'
import AverageRate from '../averageRate/averageRate'
import './restaurant.css'
const Restaurant = props => {
  return (
    <div>
      <AverageRate restaurant={props.restaurant} />
      <Menu menu={props.restaurant.menu} />
      <Reviews reviews={props.restaurant.reviews} />
    </div>
  )
}

export default Restaurant
