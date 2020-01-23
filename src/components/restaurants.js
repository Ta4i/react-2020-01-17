import React, {useMemo, useState} from 'react'
import RestaurantsNavigation from './restaurants-navigation'
import Restaurant from './restaurant/restaurant'
import {Menu, Row} from 'antd'

function Restaurants({restaurants}) {
  const [activeRestaurantId, setActiveRestaurant] = useState(restaurants[0].id)
  const activeRestaurant = useMemo(
    () => restaurants.find(restaurant => restaurant.id === activeRestaurantId),
    [activeRestaurantId, restaurants]
  )

  const menuItems = restaurants.map(restaurant => (
    <Menu.Item
      key={restaurant.id}
      onClick={() => setActiveRestaurant(restaurant.id)}
    >
      {restaurant.name}
    </Menu.Item>
  ))

  return (
    <React.Fragment>
      <Row>
        <Menu theme="dark" mode="horizontal">
          {menuItems}
        </Menu>
      </Row>
      <Row>
        <Restaurant activeRestaurant={activeRestaurant} />
      </Row>
      <Row>Footer</Row>
      {/*<RestaurantsNavigation*/}
      {/*  restaurants={props.restaurants}*/}
      {/*  onRestaurantChange={id => setActiveRestaurant(id)}*/}
      {/*/>*/}
    </React.Fragment>
  )
}

export default Restaurants
