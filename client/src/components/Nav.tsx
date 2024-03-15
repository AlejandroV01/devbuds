import { redirect } from 'react-router-dom'
import Button from './Button'
import { ModeToggle } from './mode-toggle'
const Nav = () => {
  return (
    <div className='flex justify-between container items-center  h-[60px]'>
      <h2 className='font-bold text-xl'>
        <a href='/'>Devbuds</a>
      </h2>
      <ul className='flex gap-5 font-medium [&>*]:hover:cursor-pointer'>
        <li>
          <a href='/projects'>Projects</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
      </ul>
      <div className='items-center flex gap-5'>
        <a href='/login'>
          <Button variant='secondary'>Log in</Button>
        </a>

        <a href='/signup'>
          <Button variant='primary'>Sign up</Button>
        </a>

        <ModeToggle />
      </div>
    </div>
  )
}

export default Nav
