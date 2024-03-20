import React from 'react'
import ProfileInfoCard from '@/components/ProfileInfoCard'
//changed Badge file name
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ProfileInfoCard
      userFirstName={'Linda'}
      userLastName={'Maali'}
      userSchool={'Florida International University'}
      userEmail={'linda@gmail.com'}
      userPhone={'(123)-456-7890'}
      userMajor={'Computer Science'}
            />
    </div>
  )
}

export default Home
