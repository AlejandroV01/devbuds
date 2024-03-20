import supabase from '@/lib/supabaseClient'
const getProfileByEmail = async (email: string) => {
  const { data: profiles, error } = await supabase.from('profiles').select('*').eq('email', email)
  if (profiles) {
    return profiles[0]
  } else {
    console.error(error)
    return null
  }
}

export default getProfileByEmail
