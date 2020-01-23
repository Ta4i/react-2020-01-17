import React from 'react'
import Menu from "./menu";
import Review from "./review";

function Restaurant(props) {
  return (
    <div>
        <Menu restaurant={props.restaurant} />
        <Review restaurant={props.restaurant} />
    </div>
  )
}

export default Restaurant
