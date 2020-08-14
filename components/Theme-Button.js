import React from 'react'
import cn from 'classnames'

import Button from './Button'

import styles from './Theme-Button.module.css'

function ThemeButton({ big = false, className, children, ...props }) {
  return (
    <Button
      className={cn(styles.button, big && styles.bigButton, className)}
      {...props}
    >
      {children}
    </Button>
  )
}

export default ThemeButton
