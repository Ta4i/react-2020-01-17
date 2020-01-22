import React, {useMemo, useState} from 'react'
import RestaurantsNavigation from './restaurants-navigation'
import Menu from './menu'

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
      <RestaurantsNavigation
        restaurants={props.restaurants}
        onRestaurantChange={setActiveRestaurant}
      />
      <Menu restaurant={activeRestaurant} />
    </div>
  )
}

export default Restaurants
