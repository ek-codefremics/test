import React, { useState } from 'react'
import Scanner from './components/scanner'
import ReactDOM from 'react-dom'
import Popup from './components/popup'

import './index.css'

function App() {
  const [camera, setCamera] = useState(false)
  const [result, setResult] = useState(null)
  const [showPopup, setShowPopup] = useState(false)

  const onDetected = (result) => {
    setResult(result)
    setShowPopup(true)
    setCamera(false) // optionally turn off camera
  }

  const closePopup = () => {
    console.log('closing popup...')
    setShowPopup(false)
    setResult(null)
  }

  return (
    <div className='text-center h-[99vh] w-[99vw] m-0 p-0 overflow-hidden'>
      <button
        className='mt-4 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => setCamera(!camera)}
      >
        {camera ? 'Stop Camera' : 'Start Camera'}
      </button>
      <div className='relative'>
        {camera && <Scanner onDetected={onDetected} />}
      </div>
      {showPopup && <Popup result={result} onClose={closePopup} />}
    </div>
  )
}

export default App
