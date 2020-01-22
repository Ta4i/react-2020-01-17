import React, {useMemo, useState} from 'react'
import RestaurantsNavigation from './restaurants-navigation'
import Restaurant from './restaurant/restaurant'

import {Layout, Menu} from 'antd'

function Restaurants(props) {
  const [activeRestaurantId, setActiveRestaurant] = useState(
    props.restaurants[0].id
  )
  const activeRestaurant = useMemo(() => {
    return props.restaurants.find(
      restaurant => restaurant.id === activeRestaurantId
    )
  }, [activeRestaurantId, props.restaurants])

  const menuItems = props.restaurants.map(restaurant => (
    <Menu.Item
      key={restaurant.id}
      onClick={() => setActiveRestaurant(restaurant.id)}
    >
      {restaurant.name}
    </Menu.Item>
  ))

  return (
    <React.Fragment>
      <Layout>
        <Menu theme="dark" mode="horizontal">
          {menuItems}
        </Menu>
        {/*<RestaurantsNavigation*/}
        {/*  restaurants={props.restaurants}*/}
        {/*  onRestaurantChange={id => setActiveRestaurant(id)}*/}
        {/*/>*/}
        <Restaurant activeRestaurant={activeRestaurant} />
      </Layout>
    </React.Fragment>
  )
}

export default Restaurants
