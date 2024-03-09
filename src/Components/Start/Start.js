import React from 'react'
import './Start.css'

const Start = ({name,SetName,SetShow,handleClick}) => {
  return (
    <div className='container main'>
      <div className='wel'>
        <h2>Welcome to the Notes App</h2>
      </div>
      <div className='inner-main'>
          <div className='img'>
             <img src="./Notes.png" alt="" />
          </div>
          <div className='inp'>
            <input type="text" placeholder='Enter Your Name' className='input' value={name} onChange={(e)=>SetName(e.target.value)}/>
            <button className='btn' onClick={handleClick}>Enter</button>
          </div>
      </div>
        
    </div>
  )
}

export default Start