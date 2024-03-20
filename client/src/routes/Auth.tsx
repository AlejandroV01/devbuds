import Button from '@/components/Button'
import LoginCard from '@/components/LoginCard'
import supabase from '@/lib/supabaseClient'
import { useAppSelector } from '@/store/hooks'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Session } from '@supabase/supabase-js'
import React, { useEffect, useState } from 'react'
const Auth = () => {
  const [session, setSession] = useState<null | Session>(null)
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    console.log('running auth effect')
    return () => subscription.unsubscribe()
  }, [])
  console.log(session?.user)
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Error signing out:', error.message)
    }
  }
  return (
    <div>
      <h1>Auth</h1>
      {session ? <p>Signed In</p> : <LoginCard />}
      <Button variant='primary' onClick={handleSignOut}>
        Sign Out
      </Button>
    </div>
  )
}

export default Auth
