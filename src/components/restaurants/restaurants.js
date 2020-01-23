import React, {useMemo, useState} from 'react'
import {Layout} from 'antd'
import RestaurantsNavigation from '../restaurants-navigation/restaurants-navigation'
import Restaurant from '../restaurant/restaurant'
import './restaurants.css'

const {Header, Content, Footer} = Layout

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
    <Layout className="Restaurants">
      <Header>
        <RestaurantsNavigation
          restaurants={props.restaurants}
          onRestaurantChange={id => setActiveRestaurant(id)}
          activeRestaurantId={activeRestaurant.id}
        />
      </Header>
      <Content>
        <Restaurant restaurant={activeRestaurant} />
      </Content>
      <Footer>Learn React {new Date().getFullYear()}</Footer>
    </Layout>
  )
}

export default Restaurants
