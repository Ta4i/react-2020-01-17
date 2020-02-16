import React, {useContext, useMemo} from 'react'
import {Consumer as UserConsumer} from '../contexts/user'
import LanguageContext from '../contexts/language'
import translations from '../translations/components/order-complete'

function OrderComplete() {
  const {locale} = useContext(LanguageContext)
  const localizedContent = useMemo(() => translations[locale], [locale])

  return (
    <h1
      style={{
        textAlign: 'center',
        padding: '128px 0',
      }}
    >
      <UserConsumer>
        {user => `${localizedContent.thanks}, ${user.name}`}
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

export default OrderComplete
