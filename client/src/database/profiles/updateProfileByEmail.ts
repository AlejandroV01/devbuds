// updateProfileById.ts

import supabase from '@/lib/supabaseClient';

interface UpdateProfileData {
  first_name?: string;
  last_name?: string;
  email?: string;
  school?: string;
  major?: string;
  location?: string;
  linkedin_link?: string;
  github_link?: string;
  portfolio_link?: string;
  skills?: string[];
  languages?: string[];
}

const updateProfileById = async (profile_id: number, data: UpdateProfileData): Promise<boolean> => {
  try {
    const { error } = await supabase.from('profiles').update(data).eq('id', profile_id);

    if (error) {
      console.error('Error updating profile:', error.message);
      return false;
    }

    console.log('Profile updated successfully');
    return true;
  } catch (error) {
    console.error('Unexpected error updating profile:', error);
    return false;
  }
};

export default updateProfileById;
