import React, {Component} from 'react'
import Dish, {DishProps} from '../dish'
import PropTypes from 'prop-types'

class Dishes extends Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape(DishProps)).isRequired,
  }

  render() {
    const {menu} = this.props

    return (
      <div>
        {menu.map(dishId => (
          <Dish key={dishId} id={dishId} />
        ))}
      </div>
    )
  }
}

Dishes.defaultProps = {
  menu: [],
}

export default Dishes
