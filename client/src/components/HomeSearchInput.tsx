import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Button from './Button'
import Input from './Input'
import ShadowCard from './ShadowCard'
function HomeSearchInput() {
  const [text, setText] = useState('')
  console.log(text)
  return (
    <ShadowCard>
      <h1>HomeSearchInput File</h1>
      <Input type='text' value={text} onChange={e => setText(e.target.value)} />
      <Button variant='primary'>
        <FaSearch />
      </Button>
      <select name='Animals' id=''>
        <option value='Pig'>Pig</option>
        <option value='Pig'>Cow</option>
        <option value='Pig'>Bird</option>
      </select>
    </ShadowCard>
  )
}

export default HomeSearchInput
