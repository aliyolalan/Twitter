import React from 'react'
import cn from 'classnames'

import styles from './Layout.module.css'

function Stack({ children }) {
  return <div className={cn([styles.layout])}>{children}</div>
}

export default Stack
