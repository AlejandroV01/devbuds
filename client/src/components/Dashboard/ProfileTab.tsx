import fetchProfileByID from '@/database/profiles/fetchProfileByID'
import { useAppSelector } from '@/store/hooks'
import React, { useEffect, useState } from 'react'
import Avatar from '../Avatar'
import EducationCard from '../EducationCard'
import ExperienceCard from '../ExperienceCard'
import PortfolioCard from '../PortfolioCard'
import ProfileInfoCard from '../ProfileInfoCard'
import ProfileProjectCard from '../ProfileProjectCard'
const ProfileTab = () => {
  const user = useAppSelector(state => state.auth)
  console.log('user id: ', user.id)
  /**
   * Navigate to localhost:5167/dashboard to view this file
   * Order of the components if the following
   * 1. Avatar
   * 2. ProfileInfoCard
   * 3. ExperienceCard
   * 4. EducationCard
   * 5. ProfileProjectCard
   * 6. PortfolioCard
   * Use the fetchProfileByID function to get the user's profile
   * I made it so that in this branch the user.id is default to 1 which is
   * a valid user id in the database
   * Do not worry about the Skills Card, it is still in development
   * If you have any questions, please ask!
   */
  return (
    <div className='w-full bg-orange-500 h-[2000px]'>
      <h1>Profile Tab</h1>
    </div>
  )
}

export default ProfileTab
