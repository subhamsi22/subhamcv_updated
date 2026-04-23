import React from 'react'
import Nav from './component/nav'
import King from './component/king'
import MainText from './component/main_text'
import And from './component/and'
import Pic from './component/pic'

function App() {
  return (
    <div>
      <Nav />
      <Pic />
      <King />
      <MainText displayText="web designer" />
      <And />
      <MainText displayText="web developer" />
    </div>
  )
}

export default App