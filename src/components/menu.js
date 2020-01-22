import React from 'react'
import Dish from './dish'

function Menu(props) {
  return (
    <div>
      {props.menu.map(dish => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  )
}

export default Menu
