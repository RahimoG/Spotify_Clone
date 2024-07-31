import { useState } from 'react'
import Left_bar from './components/Left_bar'
import Main_bar from './components/Main_bar'
import Right_bar from './components/Right_bar'

function App() {

  return (
    <>
        <div className='flex'>
          <div className='w-[600px]'>
            <Left_bar />
          </div>
          <Main_bar />
          <Right_bar />
        </div>
    </>
  )
}

export default App
