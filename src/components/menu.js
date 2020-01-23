import React from 'react'
import Dish from './dish'

function Menu(props) {
  return (
    <div style={{width: '700px', margin: '10px'}}>
      <h2 style={{marginLeft: 20, marginBottom: 15}}>Menu</h2>
      {props.restaurant.menu.map(dish => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  )
}

export default Menu
