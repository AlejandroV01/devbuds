import React, { useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { FaXmark } from 'react-icons/fa6'
import { RiPencilFill } from 'react-icons/ri'
import Button from './Button'
import Input from './Input'
import Badge from './badge'
const SkillCard = ({
  onFinishEditing,
  skills,
  onDoneClick,
}: {
  onFinishEditing: () => void
  skills: string[]
  onDoneClick: (e: React.FormEvent<HTMLFormElement>, val: string) => void
}) => {
  const [inputSkill, setInputSkill] = useState<string>('')
  const [editMode, setEditMode] = useState<boolean>(false)
  const handleAddSkill = (event: React.FormEvent) => {
    event.preventDefault()
    if (!inputSkill) return
    setInputSkill('')
  }
  const handleEdit = (event: React.FormEvent) => {
    event.preventDefault()
  }

  return (
    <div className='flex flex-col gap-4 bg-blue-400 p-6'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-3xl'>Skills</h1>
        <RiPencilFill size={18} />
        <FaXmark size={18} />
      </div>
      {/**
       * Edit mode will change decide if the div underneath this comment is shown
       * Edit mode will also decide which icon is shown like the pencil
       * onClick of x should also call the same function as the Finish button
       */}
      <div className='flex gap-5'>
        <form onSubmit={e => onDoneClick(e, inputSkill)} className='flex gap-3'>
          <Input type='text' value={inputSkill} onChange={event => setInputSkill(event.target.value)} className='bg-white' />
          <Button variant='primary'>Enter Skill</Button>
        </form>
        <Button variant='secondary' onClick={onFinishEditing}>
          Finish
        </Button>
      </div>
      <div className='flex justify-start gap-2 flex-wrap'>
        {skills.map((skill, index) => (
          <Badge label={skill} key={index} />
        ))}
      </div>
    </div>
  )
}
export default SkillCard
