import React from 'react'
import {Menu} from 'antd'

const Nav = ({restaurants, setActiveRestaurant}) => {
  const menuItems = restaurants.map(restaurant => (
    <Menu.Item
      key={restaurant.id}
      onClick={() => setActiveRestaurant(restaurant.id)}
    >
      {restaurant.name}
    </Menu.Item>
  ))

  return (
    <Menu theme="dark" mode="horizontal">
      {menuItems}
    </Menu>
  )
}

export default Nav
