import React from 'react'

import Button from '../components/Button'
import NavigationButton from '../components/Navigation-Button'
import Navigation from '../components/Navigation'
import { Home } from '../components/icons'
import TextTitle from '../components/Text-Title'
import ThemeButton from '../components/Theme-Button'
import Stack from '../components/Stack'

export default {
  title: 'Buttons'
}

export const Normal = () => <Button>Merhaba</Button>

export const Theme = () => (
  <Stack column gap={10}>
    <ThemeButton>Twitter</ThemeButton>
    <ThemeButton full>Twitter Full</ThemeButton>
    <ThemeButton full big>
      Twitter Big
    </ThemeButton>
  </Stack>
)

export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavigationButton>
)

export const Nav = () => <Navigation selectedKey="home" />
