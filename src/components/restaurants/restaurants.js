import React, {useCallback, useEffect, useState} from 'react'
import Restaurant from '../restaurant'
import RestaurantsNavigation from '../restaurants-navigation'
import {connect} from 'react-redux'
import {selectRestaurants} from '../../store/selectors'
import {fetchRestaurants} from '../../store/action-creators'
import {Row, Spin} from 'antd'

function Restaurants(props) {
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    props.fetchRestaurants && props.fetchRestaurants()
  }, [])

  const restaurant = props.restaurants.find(
    restaurant => restaurant.id === currentId
  )
  const handleRestaurantChange = useCallback(id => setCurrentId(id), [
    setCurrentId,
  ])

  useEffect(() => {
    if (props.restaurants.length === 0) {
      return
    }
    setCurrentId(currentId || props.restaurants[0].id)
  }, [props.restaurants.length])

  if (props.restaurants.length === 0 || !currentId) {
    return (
      <Row type="flex" justify="center">
        <Spin size="large" />
      </Row>
    )
  }

  return (
    <div data-automation-id="RESTAURANTS">
      <input type={'text'} />
      <RestaurantsNavigation
        restaurants={props.restaurants}
        onRestaurantChange={handleRestaurantChange}
      />
      <Restaurant restaurant={restaurant} />
    </div>
  )
}

const mapStateToProps = state => ({
  restaurants: selectRestaurants(state),
})

const mapDispatchToProps = {
  fetchRestaurants,
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)
