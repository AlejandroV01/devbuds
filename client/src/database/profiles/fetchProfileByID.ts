import supabase from "@/lib/supabaseClient"
import React from 'react'

const fetchProfileByID = async (profileID: number) => {
  const {data: profiles, error} = await supabase.from('profiles').select('*').eq('profile_id', profileID)
  if(profiles) {
    return profiles[0]
  }
  else {
    console.error(error)
    return null
  }
}

export default fetchProfileByID