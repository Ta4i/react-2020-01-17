import React from 'react'
import './restaurants-navigation.css'
import {Menu} from 'antd'

function RestaurantsNavigation(props) {
  return (
    <Menu
      className="RestaurantsNavigation"
      theme="dark"
      mode="horizontal"
      selectedKeys={[props.activeRestaurantId]}
    >
      {props.restaurants.map(restaurant => (
        <Menu.Item
          key={restaurant.id}
          onClick={() => {
            props.onRestaurantChange(restaurant.id)
          }}
          className={restaurant.id === props.activeRestaurantId ? 'active' : ''}
        >
          {restaurant.name}
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default RestaurantsNavigation
