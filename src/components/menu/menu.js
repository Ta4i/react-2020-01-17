import React from 'react'
import Dish from '../dish/dish'
import './menu.css'

function Menu(props) {
  return (
    <div className="menu-wrapper">
      <h2>Menu</h2>
      <div className="menu">
        {props.menu.map(dish => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  )
}

export default Menu
