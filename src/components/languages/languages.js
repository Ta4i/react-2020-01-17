import React from 'react'
import {Select} from 'antd'
import styles from './languages.module.css'
import {Consumer as LanguageConsumer, languages} from '../../contexts/languages'

function Languages({onLanguageChange}) {
  const handleLanguageChange = e => {
    onLanguageChange(e)
  }
  const {Option} = Select
  return (
    <LanguageConsumer>
      {language => (
        <div className={styles.langSelect}>
          <div className={styles.selectLabel}>
            {languages.language[language]}
          </div>
          <Select
            defaultValue="en"
            style={{width: 60}}
            onChange={handleLanguageChange}
          >
            <Option value="en">EN</Option>
            <Option value="ru">RU</Option>
          </Select>
        </div>
      )}
    </LanguageConsumer>
  )
}

export default Languages
