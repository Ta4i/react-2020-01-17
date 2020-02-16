import React from 'react'
import translations from '../translations'
import {Consumer as TranslateConsumer} from '../contexts/translate'

export default function withTranslation(OriginalComponent) {
  return props => (
    <TranslateConsumer>
      {language => {
        return <OriginalComponent {...props} t={translations[language]} />
      }}
    </TranslateConsumer>
  )
}
