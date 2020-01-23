import React, {useMemo, useState} from 'react'
import RestaurantsNavigation from './restaurants-navigation'
import Restaurant from './restaurant'
import {Layout} from 'antd'
const {Header, Content} = Layout

function Restaurants(props) {
  const [activeRestaurantId, setActiveRestaurant] = useState(
    props.restaurants[0].id
  )
  const activeRestaurant = useMemo(() => {
    return props.restaurants.find(
      restaurant => restaurant.id === activeRestaurantId
    )
  }, [activeRestaurantId, props.restaurants])
  return (
    <div>
      <Header>
        <RestaurantsNavigation
          restaurants={props.restaurants}
          onRestaurantChange={id => setActiveRestaurant(id)}
        />
      </Header>
      <Content>
        <Restaurant restaurant={activeRestaurant} />
      </Content>
    </div>
  )
}

export default Restaurants
