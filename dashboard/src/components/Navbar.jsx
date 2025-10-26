import React from 'react'

export default function Navbar({ dark, toggletheme }) {
  return (
    <div className='flex justify-between items-center px-8 py-6 max-w-6xl mx-auto'>
      <h2 className='text-xl  font-bold'>Developer Dashboard</h2>
      <button 
        onClick={toggletheme}
        className="rounded px-4 py-2 bg-blue-500 text-white font-semibold hover:bg-blue-600"
      >
        Light/Dark
      </button>
    </div>
  )
}