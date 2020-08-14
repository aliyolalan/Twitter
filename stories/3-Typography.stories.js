import React from 'react'

import TextTitle from '../components/Text-Title'

export default {
  title: 'Typography'
}

export const Title = () => (
  <div>
    <TextTitle bold={false}>Merhaba Dünya</TextTitle>
    <TextTitle>Merhaba Dünya</TextTitle>
  </div>
)
