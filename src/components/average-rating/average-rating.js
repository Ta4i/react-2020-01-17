import React, {useMemo} from 'react'
import {Rate} from 'antd'
import PropTypes from 'prop-types'

function AverageRating({reviews}) {
  AverageRating.propTypes = {
    reviews: PropTypes.array.isRequired,
  }

  AverageRating.defaultProps = {
    reviews: [],
  }

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

export default AverageRating
