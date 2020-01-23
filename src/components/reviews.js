import React, {Fragment, useState} from 'react'
import {Rate} from 'antd';

function Reviews({reviews}) {

  const sumRating = reviews.reduce((sum, item) => (sum + item.rating), 0)
  const midRating = reviews.length > 1 ? sumRating / reviews.length : sumRating

  return (
  <Fragment>
    {reviews.map((review) => (
      <div key={review.id}>
        <div>{review.user}</div>
        <div>{review.text}</div>
      </div>
    ))}
    <Rate normal disabled value={Math.round(midRating)} />
  </Fragment>
  )
}

export default Reviews