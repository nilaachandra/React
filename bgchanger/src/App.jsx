import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('black')
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-blue-100 px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm bg-red-600' onClick={() => setColor("red")} >Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm bg-blue-600' onClick={() => setColor("blue")} >Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm bg-green-600' onClick={() => setColor("green")} >Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm bg-yellow-600' onClick={() => setColor("yellow")} >Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
