import supabase from '@/lib/supabaseClient'
import { Session, createClient } from '@supabase/supabase-js'
import Reactm, { useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { ModeToggle } from './mode-toggle'

const Nav = () => {
  const [session, setSession] = useState<Session | null>(null)
  useEffect(() => {
    console.log(session)
    handleSessionCheck()
  }, [session])
  const handleSessionCheck = () => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
  }
  const handleSignUp = async (email: string, password: string) => {
    const { user, session, error } = await supabase.auth.signUp({
      email,
      password,
    })
    handleSessionCheck()
    console.log(user, session, error)
  }
  const handleSignIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    handleSessionCheck()
    console.log(data, error)
  }
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    handleSessionCheck()
    console.log(error)
  }
  return (
    <div>
      <div className=' w-full  h-[25px] bg-primary flex items-center justify justify-between px-[2%] text-white'>
        <div className='font-bold flex items-center text-lg'>devBuds</div>
        <div>
          <IoSearch color='' />
        </div>
        <button></button>
        <button></button>
        <p>{!session ? 'NOT SIGNED IN' : 'SIGNED IN'}</p>
        <button className='p-2 bg-sky-500' onClick={() => handleSignUp('alexvera0109@gmail.com', '1234567')}>
          Mock Sign Up
        </button>
        <button className='p-2 bg-sky-500' onClick={() => handleSignIn('alexvera0109@gmail.com', '1234567')}>
          Mock Sign In
        </button>
        <button className='p-2 bg-destructive' onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
      <ModeToggle />
    </div>
  )
}

export default Nav
