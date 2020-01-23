import React from 'react'
import Dish from './dish'
import {Card} from 'antd'

function Menu(props) {
  return (
    // <div>
    //   {props.restaurant.menu.map(dish => (
    //     <Dish key={dish.id} dish={dish} />
    //   ))}
    // </div>

    <Card title={<h4>MENU</h4>}>
      {props.restaurant.menu.map(dish => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </Card>
  )
}

export default Menu
