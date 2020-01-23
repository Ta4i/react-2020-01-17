import React from 'react'
import {Rate} from 'antd'

function RestaurantsNavigation(props) {

    function getRateValue(review){
        return review.map(e => e.rating).reduce((a,b)=>a+b)/review.length;
    }

    return (
        <div style={{paddingLeft: 10}}>
            {props.restaurants.map(restaurant => (
                <div key={restaurant.id}>
                    <a
                       onClick={() => {
                           props.onRestaurantChange(restaurant.id)
                       }}
                    >
                        {restaurant.name}
                    </a> &nbsp;
                    <Rate allowHalf disabled value={getRateValue(restaurant.reviews)}/>
                </div>
            ))}
        </div>
    )
}

export default RestaurantsNavigation
