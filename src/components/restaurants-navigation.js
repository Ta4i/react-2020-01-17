import React from 'react'
import {Button} from 'antd'

function RestaurantsNavigation(props) {
  return (
    <div className="navigation">
      <h1>Restaurants</h1>
      {props.restaurants.map(restaurant => (
        <Button
          style={{marginLeft: '16px'}}
          size="large"
          key={restaurant.id}
          onClick={() => {
            props.onRestaurantChange(restaurant.id)
          }}
        >
          {restaurant.name}
        </Button>
      ))}
    </div>
  )
}

export default RestaurantsNavigation
