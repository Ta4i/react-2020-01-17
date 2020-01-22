import React, {useMemo, useState} from 'react'
import RestaurantsNavigation from '../restaurants-navigation/restaurants-navigation'
import Restaurant from '../restaurant/restaurant'
import {Layout} from 'antd'
import './restaurants.css'

const {Header, Footer, Content} = Layout

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
      <Layout>
        <Header>
          <RestaurantsNavigation
            restaurants={props.restaurants}
            onRestaurantChange={id => setActiveRestaurant(id)}
          />
        </Header>
        <Content>
          <Restaurant restaurant={activeRestaurant} />
        </Content>
        <Footer>Povered by me {new Date().toDateString()}</Footer>
      </Layout>
    </div>
  )
}

export default Restaurants
