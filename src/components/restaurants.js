import React, {useMemo, useState} from 'react'
import RestaurantsNavigation from './restaurants-navigation'
import Restaurant from './restaurant'
import {Layout} from 'antd'

function Restaurants(props) {
  const [activeRestaurantId, setActiveRestaurant] = useState(
    props.restaurants[0].id
  )
  const activeRestaurant = useMemo(() => {
    return props.restaurants.find(
      restaurant => restaurant.id === activeRestaurantId
    )
  }, [activeRestaurantId, props.restaurants])
  const {Header, Content} = Layout
  return (
    <div>
      <RestaurantsNavigation
        restaurants={props.restaurants}
        onRestaurantChange={id => setActiveRestaurant(id)}
      />
      <Content>
        <Restaurant restaurant={activeRestaurant} />
      </Content>
    </div>
  )
}

export default Restaurants
