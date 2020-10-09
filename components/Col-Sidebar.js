import React from 'react'
import cn from 'classnames'

import styles from './Col-Sidebar.module.css'
import Navigation from './Navigation'
import ThemeButton from './Theme-Button'
import ProfileBox from './Profile-Box'

function Sidebar({ flat }) {
  return (
    <div className={cn([styles.sidebar])}>
      <Navigation flat={flat} />
      <ThemeButton big full>
        Tweet
      </ThemeButton>
      <ProfileBox></ProfileBox>
    </div>
  )
}

export default Sidebar
