import React from 'react'
import Dish from '../dish/dish'
import './menu.css'

function Menu(props) {
  return (
    <div className="Menu">
      <h2>Menu</h2>
      {props.restaurant.menu.map(dish => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  )
}

export default Menu
