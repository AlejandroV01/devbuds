import React from 'react'
import { FaGraduationCap } from "react-icons/fa6";
import { PiFlaskLight } from "react-icons/pi";

interface IProfileInfoCard {
    userFirstName: string
    userLastName: string
    userSchool: string
    userPhone: string
    userEmail: string
    userMajor: string
}

const ProfileInfoCard = ({userFirstName, userLastName, userSchool, userPhone, userEmail, userMajor}: IProfileInfoCard) => {
  return (
    <div className='content-center grid grid-cols-2 divide-x divide-accent w-[600px] h-[125px] bg-primary p-5 rounded-lg text-muted'>
        <div className='flex-col'>
            <div className='text-[18px] font-semibold'>
                    {userFirstName} {userLastName}</div>
            
            <div className='text-[14px]'>
                <div className='flex items-center'>
                    <FaGraduationCap/> &nbsp; {userSchool}</div>
                <div className='flex items-center'>
                    <PiFlaskLight/> &nbsp; {userMajor}</div>
            </div>
        </div>

        <div className='flex-col px-7'>
            <div className='text-[18px] font-semibold'>
                Contact</div>
            <div className='text-[14px]'>
                {userEmail} <br/> {userPhone}</div>
        </div>

    </div>
    
  )
}

export default ProfileInfoCard