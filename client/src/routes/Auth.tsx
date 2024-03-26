import Button from '@/components/Button'
import LoginCard from '@/components/LoginCard'
import supabase from '@/lib/supabaseClient'
import { useAppSelector } from '@/store/hooks'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Session } from '@supabase/supabase-js'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
const Auth = () => {
  const [params] = useSearchParams()
  const isLogin = params.get('login')
  const [session, setSession] = useState<null | Session>(null)
  // useEffect(() => {
  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   })
  //   console.log('running auth effect')
  //   return () => subscription.unsubscribe()
  // }, [])
  console.log(session?.user)
  // const handleSignOut = async () => {
  //   const { error } = await supabase.auth.signOut()
  //   if (error) {
  //     console.error('Error signing out:', error.message)
  //   }
  // }
  return (
    <div className='flex items-center justify-center h-screen w-screen bg-green-100'>
      {session ? <p>Signed In</p> : <LoginCard isLogin={isLogin} />}
      {/* <Button variant='primary' onClick={handleSignOut}>
        Sign Out
      </Button> */}
    </div>
  )
}

export default Auth
