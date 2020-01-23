import React from 'react'
import Menu from './menu'
import Reviews from './reviews'

function Restaurant(props) {
  return (
    <div>
      <Menu restaurant={props.restaurant} />
      <Reviews restaurant={props.restaurant} />
    </div>
  )
}

export default Restaurant
