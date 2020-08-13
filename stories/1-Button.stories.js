import React from 'react'

import Button from '../components/Button'
import NavigationButton from '../components/Navigation-Button'
import Navigation from '../components/Navigation'

export default {
  title: 'Buttons'
}

export const Normal = () => <Button>Merhaba</Button>

export const NavButton = () => <NavigationButton>Merhaba</NavigationButton>

export const Nav = () => <Navigation />
