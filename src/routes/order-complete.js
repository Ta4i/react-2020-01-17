import React from 'react'
import {Consumer as UserConsumer} from '../contexts/user'
import withTranslation from '../decorators/withTranslation'

function OrderComplete({t}) {
  console.log({t})
  return (
    <h1
      style={{
        textAlign: 'center',
        padding: '128px 0',
      }}
    >
      <UserConsumer>
        {user => {
          return `${t['thanks']}, ${user.name}`
        }}
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

export default withTranslation(OrderComplete)
