import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Review from './review'
import {Col, Row, Spin} from 'antd'
import ReviewForm from '../review-form'
import {connect} from 'react-redux'
import {selectReviews, selectReviewsLoaded} from '../../store/selectors'
import {fetchReviews, fetchUsers} from '../../store/action-creators'

class Reviews extends Component {
  static defaultProps = {
    reviews: [],
  }

  componentDidMount() {
    this.props.fetchUsers && this.props.fetchUsers()
    this.props.fetchReviews && this.props.fetchReviews()
  }

  render() {
    const {reviews, reviewsLoaded, id} = this.props

    if (!reviewsLoaded) {
      return (
        <Row type="flex" justify="center">
          <Spin size="large" />
        </Row>
      )
    }

    return (
      <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
        <Col xs={24} md={16}>
          {reviews.map(review => (
            <Review review={review} key={review.id} />
          ))}
          <ReviewForm id={id} />
        </Col>
      </Row>
    )
  }
}

export const ReviewsPropTypes = {
  id: PropTypes.string,
  reviewsLoaded: PropTypes.bool,
  reviews: PropTypes.arrayOf(PropTypes.string),
}

Review.propTypes = ReviewsPropTypes

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: selectReviews(state, ownProps),
    reviewsLoaded: selectReviewsLoaded(state),
  }
}

const mapDispatchToProps = {
  fetchReviews,
  fetchUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)
