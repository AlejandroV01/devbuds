import ProfileInfoCard from '@/components/ProfileInfoCard'
import React from 'react'
//changed Badge file name
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ProfileInfoCard
        userFirstName={'Linda'}
        userLastName={'Maali'}
        userSchool={'Florida International University'}
        userEmail={'example@gmail.com'}
        userPhone={'(123)-456-7890'}
        userMajor={'Computer Science'}
      />
    </div>
  )
}

export default Home
