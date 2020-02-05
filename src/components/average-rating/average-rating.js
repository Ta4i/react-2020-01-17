import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import {useSelector} from 'react-redux'
import {Rate} from 'antd'
import {selectAverageRating} from '../../store/selectors/reviews'

function AverageRating({reviews}) {
  const selectAverageRatingMemo = useCallback(
    state => selectAverageRating(state, {ids: reviews}),
    [reviews]
  )
  const rawRating = useSelector(selectAverageRatingMemo)
  const normalizedRating = Math.floor(rawRating * 2) / 2
  return (
    <div>
      <Rate value={normalizedRating} disabled allowHalf />
    </div>
  )
}

AverageRating.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default AverageRating
