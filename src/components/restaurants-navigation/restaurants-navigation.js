import React from 'react'
import {Button} from 'antd'
import './restaurants-navigation.css'

function RestaurantsNavigation(props) {
  return (
    <div className="header-buttons">
      {props.restaurants.map(restaurant => (
        <Button
          key={restaurant.id}
          onClick={() => {
            props.onRestaurantChange(restaurant.id)
          }}
          type="default"
        >
          {restaurant.name}
        </Button>
      ))}
    </div>
  )
}

export default RestaurantsNavigation
