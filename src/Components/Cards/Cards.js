import React from 'react'
import './Cards.css'
import { MdDelete } from "react-icons/md";

const Cards = ({oldData,handleDelete}) => {

  return (
    <>
     <h1 className='head'>Notes</h1>
     <div className='cards1'>
    {oldData.map((item,id)=>(
        <div className='cards2' key={id}>
            <div className='data'>
            <p>{id+1}.</p>
            <p>{item.title}</p>
            </div>
            <div className='note1'>
            <p>{item.note}</p>
            <button onClick={()=>handleDelete(id)} className='del-btn'><MdDelete></MdDelete></button>
            </div>
        </div>
        ))}
    </div>
    </>
    
  )
}

export default Cards