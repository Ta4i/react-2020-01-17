import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Review from './review'
import {Col, Row} from 'antd'
import ReviewForm from '../review-form'
import {connect} from 'react-redux'
import {
  selectReviewsByRestaurant,
  selectReviewsLoaded,
} from '../../store/selectors'
import {fetchReviews} from '../../store/action-creators'
import Loader from '../loader'

class Reviews extends Component {
  componentDidMount() {
    this.props.fetchReviews && this.props.fetchReviews()
  }

  render() {
    const {id, reviewsByRestaurant, reviewsLoaded} = this.props

    return (
      <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
        <Col xs={24} md={16}>
          {reviewsLoaded ? (
            reviewsByRestaurant.map(review => (
              <Review review={review} key={review.id} />
            ))
          ) : (
            <Loader size="large" tip="Loading reviews" />
          )}
          <ReviewForm id={id} />
        </Col>
      </Row>
    )
  }
}

export const ReviewsPropTypes = {
  // passed
  id: PropTypes.string,
  // connect
  reviewsByRestaurant: PropTypes.object,
  reviewsLoaded: PropTypes.bool,
  fetchReviews: PropTypes.func,
}

Review.propTypes = ReviewsPropTypes

Review.defaultProps = {
  reviews: [],
}

const mapStateToProps = (state, ownProps) => ({
  reviewsByRestaurant: selectReviewsByRestaurant(state, ownProps),
  reviewsLoaded: selectReviewsLoaded(state),
})

const mapDispatchToProps = {
  fetchReviews,
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)
