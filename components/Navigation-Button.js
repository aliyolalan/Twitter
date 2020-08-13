import React from 'react'
import cn from 'classnames'

import Button from './Button'

import styles from './Navigation-Button.module.css'

function NavigationButton({ notify, selected, children, ...props }) {
  return (
    <Button
      className={cn(styles.navButton, selected && styles.navButtonSelected)}
      {...props}
    >
      {children}
      {notify && <span className={styles.notify}>{notify}</span>}
    </Button>
  )
}

export default NavigationButton
