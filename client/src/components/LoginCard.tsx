import Button from '@/components/Button'
import Input from '@/components/Input'
import getProfileByEmail from '@/database/profiles/getProfileByEmail'
import supabase from '@/lib/supabaseClient'
import { addProfile, addProfileUuid } from '@/store/auth/auth.slice'
import { useAppDispatch } from '@/store/hooks'
import { IProfilesTableTypes } from '@/types'
import React, { useState } from 'react'
import Logo from './Logo'
const LoginCard = ({ isLogin }: { isLogin: string | null }) => {
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
    <div className='flex bg-orange-200 '>
      <div className='w-fit lg:w-[45%] flex flex-col justify-center items-center  gap-5'>
        <Logo />
        <form onSubmit={e => handleSubmit(e)} className='flex flex-col gap-2 items-center justify-center '>
          <div>{isLogin === 'true' ? <div>LOGGING IN</div> : <div>SIGNING UP</div>}</div>
          {validCredentials === false && (
            <span className=' w-full flex justify-start'>
              <p className='text-xs text-destructive'>Invalid login credentials.</p>
            </span>
          )}
          <div className='flex flex-col items-start'>
            <label htmlFor='email' className='text-sm'>
              Email
            </label>
            <Input type='email' value={userEmail} onChange={e => setUserEmail(e.target.value)} className='w-' />
          </div>
          <div className='flex flex-col items-start'>
            <label htmlFor='password' className='text-sm'>
              Password
            </label>
            <Input type='password' value={userPassword} onChange={e => setUserPassword(e.target.value)} className='w-' />
          </div>
          <span className='flex justify-end w-full my-2'>
            <a className='text-sm underline cursor-pointer'>Forgot Password?</a>
          </span>
          <Button variant='primary' children='Log In' className='w-full' />
        </form>
        <span className=''>
          <span className='text-sm'>Don't have an account? </span>
          <span className='text-sm text-primary underline cursor-pointer'>
            <a href=''>Sign up</a>
          </span>
        </span>
      </div>
      <div className='hidden lg:flex w-[55%] bg-primary justify-center items-center'>
        <img src='/undraw_work_chat_re_qes4.svg' alt='' className='h-[350px]' />
      </div>
    </div>
  )
}

export default LoginCard
