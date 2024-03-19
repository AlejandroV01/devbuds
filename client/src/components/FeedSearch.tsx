import React from 'react'
import { FaChevronDown, FaSearch } from 'react-icons/fa'
import { FiLayers } from 'react-icons/fi'
import Button from './Button'
import Input from './Input'
import ShadowCard from './ShadowCard'
interface IFeedSearch {
  searchValue: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  searchOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}
const FeedSearch = ({ searchValue, onChange, searchOnSubmit }: IFeedSearch) => {
  return (
    <ShadowCard>
      <div className='flex flex-col w-full'>
        <form action='' className='flex w-full gap-5' onSubmit={e => searchOnSubmit(e)}>
          <Input value={searchValue} onChange={onChange} type='text' className='w-full' placeholder='Search by idea title or description' />
          <Button variant='primary'>
            <FaSearch />
          </Button>
        </form>
      </div>
      <SelectChoices />
    </ShadowCard>
  )
}

export default FeedSearch

const SelectChoices = () => {
  return (
    <div className='flex gap-2 justify-between w-fit border-1 border-black items-center'>
      <div className='flex gap-1'>
        <FiLayers />
        <span>Job type</span>
      </div>
      <FaChevronDown />
    </div>
  )
}
