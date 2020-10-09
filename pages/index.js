import React from 'react'

import CONST from '../constants'
import Layout from '../components/Layout'
import Sidebar from '../components/Col-Sidebar'
import Main from '../components/Col-Main'
import Extra from '../components/Col-Extra'
import useWindowSize from '../hook/useWindowSize'

function HomePage() {
  const size = useWindowSize()

  return (
    <Layout>
      <Sidebar flat={size.width < CONST.DESKTOP_SIZE}>Sidebar</Sidebar>
      <Main> {JSON.stringify(size)}</Main>
      {size.width > CONST.TABLET_SIZE && <Extra>Extra</Extra>}
    </Layout>
  )
}

export default HomePage
