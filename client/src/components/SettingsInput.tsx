import React, { useState } from 'react'
import Input from './Input'
const SettingsInput = () => {
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [Grade, setGrade] = useState('Freshman')

  return (
    <div className='create w-[350px] outline outline-primary p-3'>
      <form className='flex flex-col gap-3'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-2xl'> Account Info</h1>
          <label htmlFor=' First Name:' className='font-bold'>
            {' '}
            First Name:
          </label>
          <Input
            required
            type='text'
            value={firstName}
            onChange={e => setfirstName(e.target.value)}
            className='p-2 outline outline-[1px] outline-gray-400 rounded w-full'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor=' Last Name:' className='font-bold'>
            {'  '}
            Last Name:
          </label>
          <Input
            required
            type='text'
            value={lastName}
            onChange={e => setlastName(e.target.value)}
            className='p-2 outline outline-[1px] outline-gray-400 rounded w-full'
          />
        </div>
        <label className='font-bold'>School Year: </label>
        <select className='font-bold p-2 outline outline-[1px] outline-gray-400 rounded'>
          <option value='Freshman'>Freshman</option>
          <option value='Sophmore'>Sophmore</option>
          <option value='Junior'>Junior</option>
          <option value='Senior'>Senior</option>
        </select>
      </form>
    </div>
  )
}
export default SettingsInput
