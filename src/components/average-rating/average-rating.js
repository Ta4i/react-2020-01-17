import React from 'react'
import PropTypes from 'prop-types'
import {Rate, Row, Spin} from 'antd'
import {useSelector} from 'react-redux'
import {selectAverageRating} from '../../store/selectors'

function AverageRating(props) {
  const normalizedRating = useSelector(state =>
    selectAverageRating(state, props)
  )

  if (!normalizedRating) {
    return (
      <Row type="flex" justify="center">
        <Spin size="large" />
      </Row>
    )
  }

  return (
    <div>
      <Rate value={normalizedRating} disabled allowHalf />
    </div>
  )
}

AverageRating.propTypes = {
  id: PropTypes.string.isRequired,
}

export default AverageRating
