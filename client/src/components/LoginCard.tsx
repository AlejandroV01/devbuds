import Button from '@/components/Button'
import Input from '@/components/Input'
import getProfileByEmail from '@/database/profiles/getProfileByEmail'
import supabase from '@/lib/supabaseClient'
import { addProfile, addProfileUuid } from '@/store/auth/auth.slice'
import { useAppDispatch } from '@/store/hooks'
import { IProfilesTableTypes } from '@/types'
import React, { useState } from 'react'
const LoginCard = () => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [validCredentials, setValidCredentials] = useState<boolean | null>(null)

  const dispatch = useAppDispatch()

  const handleSignIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    console.log(data, error)
    if (data.user && data.user.email) {
      console.log('Successfully logged in!')
      setValidCredentials(true)
      dispatch(addProfileUuid(data.user.id))
      const profile: IProfilesTableTypes | null = await getProfileByEmail(data.user.email)
      if (profile) {
        console.log('dispatching ', profile)
        dispatch(addProfile(profile))
      } else {
        console.error('Error fetching profile')
      }
    } else {
      setValidCredentials(false)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!userEmail || !userPassword) return setValidCredentials(false)
    handleSignIn(userEmail, userPassword)
  }
  return (
    <div className='absolute w-fit py-20 flex'>
      <div className='h-full w-[45%] bg-white flex flex-col justify-center items-center '>
        <div className='flex flex-col items-center justify-center gap-5'>
          <form onSubmit={e => handleSubmit(e)}>
            <div className='flex flex-col gap-2 items-center justify-center '>
              <h1 className='font-bold text-2xl'>DevBuds</h1>

              {validCredentials === false && (
                <span className=' w-full flex justify-start'>
                  <p className='text-xs text-destructive'>Invalid login credentials.</p>
                </span>
              )}

              <div className=''>
                <label htmlFor='email' className='text-sm'>
                  Email
                </label>
                <Input type='email' value={userEmail} onChange={e => setUserEmail(e.target.value)} className='w-[325px]' />
              </div>

              <div>
                <label htmlFor='password' className='text-sm'>
                  Password
                </label>
                <Input type='password' value={userPassword} onChange={e => setUserPassword(e.target.value)} className='w-[325px]' />
              </div>
              <span className='flex justify-end w-full py-2'>
                <a className='text-sm underline cursor-pointer'>Forgot Password?</a>
              </span>

              <Button variant='primary' children='Log In' className='w-full' />
            </div>
          </form>
          <span className=''>
            <span className='text-sm'>Don't have an account? </span>
            <span className='text-sm text-primary underline cursor-pointer'>
              <a href=''>Sign up</a>
            </span>
          </span>
        </div>
      </div>
      <div className='h-full w-[55%] bg-primary flex justify-center items-center'>
        <img src='/undraw_work_chat_re_qes4.svg' alt='' className='h-[350px]' />
      </div>
    </div>
  )
}

export default LoginCard
