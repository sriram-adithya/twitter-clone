import React from 'react'
import LeftSideBar from './components/LeftSideBar'
import RightSideBar from './components/RightSideBar'
import MainSide from './components/MainSide'

const App = () => {
  return (
    <div className='flex w-min md:container mx-auto bg-black text-white'>
      <LeftSideBar />
      <MainSide />
      <RightSideBar />
    </div>
  )
}

export default App


