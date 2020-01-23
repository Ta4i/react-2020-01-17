import React from 'react'
import Dish from './dish'

function Menu(props) {
  return (
    <div>
      <h4>Menu</h4>
      {props.menu.map(dish => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  )
}

export default Menu
