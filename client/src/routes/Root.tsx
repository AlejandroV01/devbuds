import Nav from '@/components/Nav'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
const Root = () => {
  const location = useLocation()
  return (
    <main className='flex flex-col'>
      {location.pathname !== '/auth' && <Nav />}
      <Outlet />
    </main>
  )
}

export default Root
