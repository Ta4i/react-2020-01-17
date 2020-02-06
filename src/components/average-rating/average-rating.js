import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import {useSelector} from 'react-redux'
import {selectReviews} from '../../store/selectors'

function AverageRating({reviewsList}) {
  const reviews = useSelector(selectReviews)
  const rawRating = useMemo(
    () =>
      reviewsList.reduce((acc, id) => acc + reviews[id].rating, 0) /
      reviewsList.length,
    [reviewsList, reviews]
  )

  const normalizedRating = Math.floor(rawRating * 2) / 2
  return (
    <div>
      <Rate value={normalizedRating} disabled allowHalf />
    </div>
  )
}

AverageRating.propTypes = {
  reviewsList: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default AverageRating
