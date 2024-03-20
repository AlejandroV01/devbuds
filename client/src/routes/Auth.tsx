import supabase from '@/lib/supabaseClient'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Session } from '@supabase/supabase-js'
import React, { useEffect, useState } from 'react'
const Auth = () => {
  const [session, setSession] = useState<null | Session>(null)

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
  return (
    <div>
      <h1>Auth</h1>
      {session && <p>Signed In</p>}
    </div>
  )
}

export default Auth
