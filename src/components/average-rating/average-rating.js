import React, {useMemo} from 'react'
import {Rate} from 'antd'

import PropTypes from 'prop-types';

function AverageRating({reviews}) {
  const rawRating = useMemo(
    () => reviews.reduce((acc, {rating}) => acc + rating, 0) / reviews.length,
    [reviews]
  )

  const normalizedRating = Math.floor(rawRating * 2) / 2
  return (
    <div>
      <Rate value={normalizedRating} disabled allowHalf />
    </div>
  )
}

AverageRating.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default AverageRating
