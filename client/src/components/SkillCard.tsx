import React, { useState } from 'react'
import Button from './Button'
import Badge from './badge'

const arr = ['']

const addSkill = () =>{ // function to add skill to empty skilllist
  
}
const handleEdit = (skill) => { // function to edit current skill
  console.log("skill");

}
const handleClose = () => { // function to handle closing of edit section
  console.log("close pop up");
  // functionality to close pop up box 
}

const whenTrue = () => { // div to pop up when handleEdit is true 
  <div className="flex flex-row">
    {arr.map(name => {
      return <Badge label= {name} />
    })}
    
  </div>
}

const SkillCard = ({ onFinishEditing }: { onFinishEditing: () => void }) => {
  return (
    <div className="flex flex-row ">

      {arr.map(name => {
        return <Badge label ={name} />
      })}

      <button onClick={handleEdit}> pencil icon here </button>
      <button onClick={handleClose}> x button here </button>
    </div>

  )
}

export default SkillCard;
