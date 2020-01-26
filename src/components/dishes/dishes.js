import React from 'react'
import PropTypes from 'prop-types'
import Dish from '../dish'

const Dishes = ({menu}) => (
  <div>
    {menu.map(dish => (
      <Dish key={dish.id} dish={dish} />
    ))}
  </div>
)

Dishes.propTypes = {
  menu: PropTypes.array.isRequired,
}

Dishes.defaultProps = {
  menu: [],
}

export default Dishes
