import React from 'react'

import Button from './Button'

import styles from './Navigation-Button.module.css'

function NavigationButton({ children }) {
  return <Button className={styles.navButton}>{children}</Button>
}

export default NavigationButton
