import React, { useState } from 'react'
//changed Badge file name
import SkillCard from '@/components/SkillCard'
const Home = () => {
  const [profileSkills, setProfileSkills] = useState(['React', 'TypeScript'])

  const changeProfileSkills = (event: React.FormEvent<HTMLFormElement>, newSkill: string) => {
    event.preventDefault()
    setProfileSkills([...profileSkills, newSkill])
  }
  return (
    <div>
      <h1>Home</h1>
      <SkillCard skills={profileSkills} onDoneClick={changeProfileSkills} />
    </div>
  )
}

export default Home
