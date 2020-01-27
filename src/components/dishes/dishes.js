import React, {Component} from 'react'
import Dish from '../dish'
import PropTypes from 'prop-types'

class Dishes extends Component {
  static defaultProps = {
    menu: [],
  }
  static propTypes = {
    menu: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string,
        price: PropTypes.number,
        ingredients: PropTypes.arrayOf(PropTypes.string),
      })
    ).isRequired,
  }

  render() {
    const {menu} = this.props

    return (
      <div>
        {menu.map(dish => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </div>
    )
  }
}

export default Dishes
