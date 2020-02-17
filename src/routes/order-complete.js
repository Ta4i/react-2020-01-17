import React from 'react'
import {Consumer as UserConsumer} from '../contexts/user'
import {Consumer as LanguageConsumer, languages} from '../contexts/languages'

function OrderComplete() {
  return (
    <LanguageConsumer>
      {language => (
        <h1
          style={{
            textAlign: 'center',
            padding: '128px 0',
          }}
        >
          <UserConsumer>
            {user => `${languages.orderComplete[language]}, ${user.name}!`}
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
      )}
    </LanguageConsumer>
  )
}
export default OrderComplete
