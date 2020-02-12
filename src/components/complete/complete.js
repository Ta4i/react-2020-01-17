import React from 'react'
import styles from './complete.module.css'
import {Alert} from 'antd'

const Complete = () => (
  <div className={styles.complete}>
    <Alert
      type="success"
      message="Success"
      description="Order complete"
      showIcon
      className={styles.alert}
    />
  </div>
)

export default Complete
