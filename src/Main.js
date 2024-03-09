import React, { useState } from 'react'
import Start from './Components/Start/Start'
import Notes from './Components/Notes/Notes';

const Main = () => {

    const [show, SetShow] = useState(true);
    const [name, SetName] = useState("");
    const [title, SetTitle] = useState("");
    const [note, SetNote] = useState("");
    const [oldData, SetOldData] = useState([]);

    const handleClick = () => {
        if(!name){
            alert("Please Enter Your name")
        }
        else{
            SetShow(false)
        }
    }

    const handleDelete = (id) => {
      const filterData = oldData.filter((elem,ind)=>{
            return id != ind;
      })
      SetOldData(filterData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
         const newData = {id: new Date().getTime().toString(),title:title,note:note};
         SetOldData([...oldData,newData]);
         SetTitle('');
         SetNote('')
    }
 
  return (
    <div>
     {show ? <Start name={name} SetName={SetName} SetShow={SetShow} handleClick={handleClick}></Start> : <Notes name={name} title={title} SetTitle={SetTitle} note={note} SetNote={SetNote} oldData={oldData} handleSubit={handleSubmit} handleDelete={handleDelete}></Notes> }
    </div>
  )
}

export default Main