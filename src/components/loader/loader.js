import React from 'react'
import {Spin} from 'antd'
import styles from './loader.module.css'

const Loader = props => <Spin {...props} className={styles.loader} />

export default Loader
