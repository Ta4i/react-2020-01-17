import React, {createContext} from 'react'
import LANGUAGE_CODES from '../translations'

const LanguageContext = createContext({
  locale: LANGUAGE_CODES.ENGLISH,
})

export const LanguageProvider = LanguageContext.Provider
export const LanguageConsumer = LanguageContext.Consumer
export default LanguageContext

export const withLanguageContext = Component => props => (
  <LanguageConsumer>
    {context => <Component languageContext={context} {...props} />}
  </LanguageConsumer>
)
