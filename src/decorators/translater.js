import React, {useContext, useMemo} from 'react'
import {LanguageContext} from '../contexts/languages'
import {en} from '../languages/en'
import {ru} from '../languages/ru'

function translaterDecorator(OriginalComponent) {
  return props => {
    const languages = {
      en,
      ru,
    }
    const currentLanguage = useContext(LanguageContext)
    const dictionary = useMemo(() => languages[currentLanguage.language], [
      languages,
      currentLanguage,
    ])

    return <OriginalComponent {...props} dictionary={dictionary} />
  }
}

export default translaterDecorator
