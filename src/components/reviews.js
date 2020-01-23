import React from 'react'
import {Rate, List, Avatar} from 'antd'

function Reviews(props) {
  const data = props.restaurant.reviews

  return (
    // <div>
    //   {props.restaurant.reviews.map(review => (
    //     <div key={review.id}>
    //       <p>{review.user}</p>
    //       <Rate disabled value={review.rating} />
    //       <p>{review.text}</p>
    //     </div>
    //   ))}
    // </div>
    <List
      header={<h3>REVIEWS</h3>}
      itemLayout="horizontal"
      bordered
      style={{marginTop: '32px'}}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={
              <div>
                <p>{item.user}</p>
                <Rate disabled value={item.rating} />
              </div>
            }
            description={item.text}
          />
        </List.Item>
      )}
    />
  )
}

export default Reviews
