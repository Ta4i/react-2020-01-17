import React, {Component} from 'react'
import Dish from '../dish'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchDishes} from '../../store/action-creators'
import {selectDishesLoaded} from '../../store/selectors'
import Loader from '../loader'

class Dishes extends Component {
  componentDidMount() {
    const {fetchDishes} = this.props
    fetchDishes && fetchDishes()
  }

  render() {
    const {menu, dishesLoaded} = this.props

    return (
      <div>
        {dishesLoaded ? (
          menu.map(dishId => <Dish key={dishId} id={dishId} />)
        ) : (
          <Loader tip="Loading dishes" size="large" />
        )}
      </div>
    )
  }
}

export const DishesPropTypes = {
  // passed
  menu: PropTypes.arrayOf(PropTypes.string),
  // connect
  dishesLoaded: PropTypes.bool,
  fetchDishes: PropTypes.func,
}

Dishes.propTypes = DishesPropTypes

const mapStateToProps = state => ({
  dishesLoaded: selectDishesLoaded(state),
})

const mapDispatchToProps = {
  fetchDishes,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dishes)
