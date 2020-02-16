import React, {useContext, useCallback} from 'react'
import {Select} from 'antd'
import styles from './language.module.css'
import LANGUAGE_CODES from '../../translations'
import LanguageContext from '../../contexts/language'

const Language = () => {
  const language = useContext(LanguageContext)
  const {handleLanguageChange} = language

  const handleChange = useCallback(
    value => {
      handleLanguageChange({locale: value})
    },
    [handleLanguageChange]
  )

  return (
    <div className={styles.language}>
      <Select
        className={styles.select}
        defaultValue={LANGUAGE_CODES.ENGLISH}
        onChange={handleChange}
      >
        {Object.values(LANGUAGE_CODES).map(lang => (
          <Select.Option className={styles.option} key={lang}>
            {lang}
          </Select.Option>
        ))}
      </Select>
    </div>
  )
}

export default Language
