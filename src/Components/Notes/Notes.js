import React from 'react';
import './Notes.css'
import Cards from '../Cards/Cards';

const Notes = ({name,title,SetTitle,note,SetNote,oldData,handleSubit,handleDelete}) => {
  return (
    <div className='main1'>
       <div>
        <div className='name'>
          <h4>Hello {name}</h4>
        </div>
        <div className='inputs1'>
          <input type="text" placeholder='Enter Title' className='first' value={title} onChange={(e)=>SetTitle(e.target.value)}/>
          <input type="text" placeholder='Enter Note' className='second' value={note} onChange={(e)=>SetNote(e.target.value)}/>
          <button className='btn1' onClick={handleSubit}>Add</button>
        </div>
        <Cards oldData={oldData} handleDelete={handleDelete}></Cards>
       </div>
    </div>
  )
}

export default Notes