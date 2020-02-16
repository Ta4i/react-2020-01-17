import React from 'react'
import {Switch} from 'antd'
import './switcher.css'

const Switcher = ({handleChangeLanguage}) => {
  return (
    <Switch
      checkedChildren="EN"
      unCheckedChildren="RU"
      defaultChecked
      onChange={handleChangeLanguage}
      className={'switcher'}
    />
  )
}

export default Switcher
