import Nav from '@/components/Nav'
import React from 'react'
import { Outlet } from 'react-router-dom'
const Root = () => {
  return (
    <main className='flex flex-col container'>
      <Nav />
      <Outlet />
    </main>
  )
}

export default Root
