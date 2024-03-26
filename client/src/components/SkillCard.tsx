import React, { useState } from 'react'
import Button from './Button'
import Badge from './badge'
import Input from './Input'
import { CiEdit } from "react-icons/ci";




const SkillCard = ({ onFinishEditing }: { onFinishEditing: () => void }) => {
  const [inputSkill, setInputSkill] = useState<string>('')
  const [inventory, setInventory] = useState<{ name: string} []>([]);
  const handleAddSkill = (event: React.FormEvent) => {
    event.preventDefault();
    if (!inputSkill) return;
    setInventory(prevInventory => [...prevInventory, {name: inputSkill}]);
    setInputSkill('');
  }
  const handleEdit = (event: React.FormEvent) => {
    event.preventDefault();
    
  }
 
  return (
    <div className='flex flex-col items-center gap-4 bg-blue-400'>
      <h1 className='text-center font-bold text-3xl'>Skills Section</h1>
      <form onSubmit= {handleAddSkill} className = 'flex gap-3'>
        <input 
        type= 'text'
        value = {inputSkill}
        onChange={event => setInputSkill(event.target.value)}
        className = 'input'
        />
        <Button variant='secondary'>Done</Button>
        <CiEdit className='gap-3 size-8' />
      </form>
      <div className ='text-center p-3 rounded-lg flex justify-center '>
      {inventory.map((skillObject, index) => (
          <SkillBox key={index} skill={skillObject.name} />
        ))}
      </div>
    </div>
  )
}
const SkillBox = ({skill}: {skill: string}) => {
  return (
    <div className='text-center items-center p-2'>
      <li>{skill}</li>
    </div>
  )
}


export default SkillCard;
