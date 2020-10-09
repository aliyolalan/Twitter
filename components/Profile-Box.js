import React from 'react'
import cn from 'classnames'

import styles from './Profile-Box.module.css'

import Photo from './Photo'
import { ArrowBottom } from './icons'
import Button from './Button'
import TextBody from './Text-Body'

function ProfileBox({ name = 'Ali Yolalan', slug = 'aliyolalan' }) {
  return (
    <Button className={cn([styles.box])}>
      <Photo />
      <div className={styles.body}>
        <TextBody bold>{name}</TextBody>
        <TextBody className={styles.slug}>@{slug}</TextBody>
      </div>
      <ArrowBottom className={styles.icon} />
    </Button>
  )
}

export default ProfileBox
