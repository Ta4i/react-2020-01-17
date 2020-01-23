import React from 'react'
import Dish from './dish'

function Menu({menu}) {
  const menuView = menu.map(dish => <Dish key={dish.id} dish={dish} />)
  return <React.Fragment>{menuView}</React.Fragment>
}

export default Menu
