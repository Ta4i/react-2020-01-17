import React from 'react'
import {Consumer as UserConsumer} from '../contexts/user'
import translaterDecorator from '../decorators/translater'

function OrderComplete({dictionary}) {
  return (
    <h1
      style={{
        textAlign: 'center',
        padding: '128px 0',
      }}
    >
      <UserConsumer>
        {user => dictionary.THANKS + ', ' + user.name}
      </UserConsumer>
      <span
        role={'img'}
        aria-label={'cook'}
        style={{
          padding: '0 12px',
        }}
      >
        👨‍🍳
      </span>
    </h1>
  )
}

export default translaterDecorator(OrderComplete)
