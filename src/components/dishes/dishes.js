import React from 'react'
import Dish from '../dish'
import PropTypes from 'prop-types'

const Dishes = ({menu}) => (
  <div>
    {menu.map(dishId => (
      <Dish key={dishId} id={dishId} />
    ))}
  </div>
)

Dishes.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.string).isRequired,
}

Dishes.defaultProps = {
  menu: [],
}

export default Dishes
