import React, { useState } from 'react'
import Button from './Button'
import Badge from './badge'
const SkillCard = ({ onFinishEditing }: { onFinishEditing: () => void }) => {
  const arr = ['mike', 'ben', 'jeff']
  const makeHello = () => {
    console.log('hello')
  }
  const [isEdit, setIsEdit] = useState<boolean>(false)
  return (
    <div>
      <h1>SkillCard</h1>
      <p>Test</p>
      {arr.map(name => {
        return <Badge label={name} />
      })}
      <Button onClick={onFinishEditing} variant='primary'>
        Done
      </Button>
      {!isEdit ? <p onClick={() => setIsEdit(true)}>Pencil</p> : <p>No Pencil</p>}
    </div>
  )
}

export default SkillCard
