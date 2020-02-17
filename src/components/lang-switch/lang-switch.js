import React, {useContext, useMemo} from 'react'
import {Button, Dropdown, Icon, Menu} from 'antd'
import I18nContext from '../../contexts/i18n'

const LangSwitch = () => {
  const {lang, translate: __, locales, handleLangChange} = useContext(
    I18nContext
  )
  const currentLocale = useMemo(() => locales[lang], [lang, locales])

  const langMenu = (
    <Menu>
      {Object.entries(locales).map(([lang, locale]) => (
        <Menu.Item
          key={lang}
          value={lang}
          disabled={!handleLangChange}
          onClick={() => handleLangChange(lang)}
        >
          {__(locale)}
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <div style={{height: '40px', float: 'right'}}>
      <Dropdown overlay={langMenu}>
        <Button>
          {lang}: {currentLocale} <Icon type="down" />
        </Button>
      </Dropdown>
    </div>
  )
}

export default LangSwitch