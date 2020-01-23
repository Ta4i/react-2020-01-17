import React from 'react'
import Menu from './menu'
import Reviews from './reviews'
import {Rate} from 'antd'

function Restaurant(props) {
  /* тут у меня какие-то проблемы c js. 
    Кроме сменить мозги))) можете посоветовать как 
    легко это понимать. Или только практика чистого js? */
  const averageRating = () => {
    let ratingArray = []
    props.restaurant.reviews.forEach(element => {
      ratingArray.push(element.rating)
    })
    let sum = ratingArray.reduce((a, b) => a + b, 0)
    return sum / ratingArray.length
  }
  return (
    <div>
      <h2>Меню ресторана</h2>
      <Menu restaurant={props.restaurant} />
      <h2>
        Средний рейтинг ресторана: <Rate disabled value={averageRating()} />
      </h2>
      <h2>Отзывы ресторана</h2>
      <Reviews restaurant={props.restaurant} />
    </div>
  )
}

export default Restaurant
