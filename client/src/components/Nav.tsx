import supabase from '@/lib/supabaseClient'
import { Session, createClient } from '@supabase/supabase-js'
import Reactm, { useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { ModeToggle } from './mode-toggle'

const Nav = () => {
  const [session, setSession] = useState<Session | null>(null)
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleSignIn = async (email: string, password: string) => {
    const { user, session, error } = await supabase.auth.signUp({
      email,
      password,
    })
    console.log(user, session, error)
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
        <button className='p-2 bg-sky-500' onClick={() => handleSignIn('test@test.com', '1234567')}>
          Mock Sign In
        </button>
      </div>
      <ModeToggle />
    </div>
  )
}

export default Nav
