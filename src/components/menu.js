import React from 'react'
import Dish from './dish'

function Menu({menu}) {
  return (
    <div>
      {menu.map(dish => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  )
}

export default Menu
