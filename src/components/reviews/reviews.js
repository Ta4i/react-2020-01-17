import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Review from './review'
import {Col, Row} from 'antd'
import ReviewForm from '../review-form'
import {connect} from 'react-redux'
import {selectReviews} from '../../store/selectors'
import {fetchReviews} from '../../store/action-creators'

class Reviews extends Component {
  static defaultProps = {
    reviews: {},
  }

  componentDidMount() {
    this.props.fetchReviews && this.props.fetchReviews()
  }

  render() {
    const {reviews, id} = this.props
    if (Object.values(reviews).length === 0) {
      return <h1>Loading reviews...</h1>
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
}

Review.propTypes = ReviewsPropTypes

const mapDispatchToProps = {
  fetchReviews,
}

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: selectReviews(state, ownProps),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)
