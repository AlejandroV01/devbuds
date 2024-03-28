import supabase from '@/lib/supabaseClient'
import { IProfileTableTypes } from '@/types'

const updateProfileById = async (profile_email: number, data: IProfileTableTypes): Promise<boolean> => {
  try {
    const { error } = await supabase.from('profiles').update(data).eq('email', profile_email)

    if (error) {
      console.error(error)
      return false
    }

    return true
  } catch (error) {
    console.error('ERROR: Cannot update profile data', error)
    return false
  }
}

export default updateProfileById
