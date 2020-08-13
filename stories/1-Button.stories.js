import React from 'react'

import Button from '../components/Button'
import NavigationButton from '../components/Navigation-Button'
import Navigation from '../components/Navigation'
import { Home } from '../components/icons'
import TitleBold from '../components/Title-Bold'

export default {
  title: 'Buttons'
}

export const Normal = () => <Button>Merhaba</Button>

export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TitleBold>Home</TitleBold>
  </NavigationButton>
)

export const Nav = () => <Navigation selectedKey="home" />
