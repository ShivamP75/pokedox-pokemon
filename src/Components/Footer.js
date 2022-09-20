import React from 'react'


export default function Footer({increment, decrement}) {
  return (
    <div className='footer'>
      <button onClick={decrement}>Prev</button>
      <button onClick={increment}>Next</button>
    </div>
  )
}
