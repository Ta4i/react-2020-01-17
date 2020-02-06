import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import {useSelector} from 'react-redux'
import {selectAverageRating} from '../../store/selectors'

function AverageRating(props) {
  const ratingMemo = useCallback(
    state => selectAverageRating(state, {ids: props.reviews}),
    [props]
  )
  const rating = useSelector(ratingMemo)

  return (
    <div>
      <Rate value={rating} disabled allowHalf />
    </div>
  )
}

AverageRating.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default AverageRating
