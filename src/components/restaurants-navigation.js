import React from 'react'
import {Menu} from 'antd'

function RestaurantsNavigation(props) {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{lineHeight: '64px'}}
    >
      {props.restaurants.map(restaurant => (
        <Menu.Item
          key={restaurant.id}
          onClick={() => {
            props.onRestaurantChange(restaurant.id)
          }}
        >
          {restaurant.name}
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default RestaurantsNavigation
