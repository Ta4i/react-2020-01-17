import React, {useCallback, useContext, useMemo} from 'react'
import {Switch} from 'antd'
import './lang-switcher.css'
import {LanguageContext} from '../../contexts/languages'

function LangSwitcher(props) {
  const language = useContext(LanguageContext)

  const checkedValue = useMemo(() => language.language === 'en', [language])

  const handleLanguageChange = useCallback(
    checked => {
      const newLanguage = checked ? 'en' : 'ru'
      language.handleLanguageChange(newLanguage)
    },
    [language]
  )
  return (
    <div className={'lang-switcher-container'}>
      <Switch
        checkedChildren="en"
        unCheckedChildren="ru"
        defaultChecked={checkedValue}
        onChange={handleLanguageChange}
      />
    </div>
  )
}

export default LangSwitcher
